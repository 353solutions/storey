import asyncio
import json
import os
import queue
import re
import threading
import time

import aiohttp

from dtypes import *
from windowed_store import WindowedStore

_termination_obj = object()


class Flow:
    def __init__(self):
        self._inlet = None
        self._outlet = None

    def to(self, outlet):
        self._outlet = outlet
        outlet._inlet = self
        return outlet

    def run(self):
        return self._inlet.run()


class MaterializedFlow:
    def __init__(self, emit_fn, await_termination_fn):
        self._emit_fn = emit_fn
        self._await_termination_fn = await_termination_fn

    def emit(self, element):
        self._emit_fn(element)

    def terminate(self):
        self.emit(_termination_obj)

    def await_termination(self):
        ex = self._await_termination_fn()
        if ex:
            raise ex


class Source(Flow):
    def __init__(self, buffer_size=1):
        super().__init__()
        assert buffer_size > 0, 'Buffer size must be positive'
        self._q = queue.Queue(buffer_size)
        self._termination_q = queue.Queue(1)
        self._ex = None

    async def _run_loop(self):
        loop = asyncio.get_running_loop()

        while True:
            element = await loop.run_in_executor(None, self._q.get)
            if self._outlet:
                try:
                    await self._outlet.do(element)
                except BaseException as ex:
                    self._ex = ex
                    if not self._q.empty():
                        self._q.get()
                    break
            if element is _termination_obj:
                break

    def _loop_thread_main(self):
        asyncio.run(self._run_loop())
        self._termination_q.put(self._ex)

    def _raise_on_error(self, ex):
        if ex:
            raise Exception('Flow execution terminated due to an error') from self._ex

    def _get_and_raise_on_error(self):
        self._raise_on_error(self._termination_q.get())

    def _emit(self, element):
        self._raise_on_error(self._ex)
        self._q.put(element)
        self._raise_on_error(self._ex)

    def run(self):
        thread = threading.Thread(target=self._loop_thread_main)
        thread.start()
        return MaterializedFlow(self._emit, self._get_and_raise_on_error)


class Map(Flow):
    def __init__(self, fn):
        super().__init__()
        assert callable(fn), f'Expected a callable, got {type(fn)}'
        self._is_async = asyncio.iscoroutinefunction(fn)
        self._fn = fn

    async def do(self, element):
        if element is _termination_obj:
            await self._outlet.do(_termination_obj)
        else:
            mapped_elem = self._fn(element)
            if self._is_async:
                mapped_elem = await mapped_elem
            if self._outlet:
                await self._outlet.do(mapped_elem)


class NeedsV3ioAccess:
    def __init__(self, webapi=None, access_key=None):
        if not webapi:
            webapi = os.getenv('V3IO_API')
        assert webapi, 'Missing webapi parameter or V3IO_API environment variable'

        if not webapi.startswith('http://') and not webapi.startswith('https://'):
            webapi = f'http://{webapi}'

        self._webapi_url = webapi

        if not access_key:
            access_key = os.getenv('V3IO_ACCESS_KEY')
        assert access_key, 'Missing access_key parameter or V3IO_ACCESS_KEY environment variable'

        self._get_item_headers = {
            'X-v3io-function': 'GetItem',
            'X-v3io-session-key': access_key
        }


class JoinWithTable(Flow, NeedsV3ioAccess):
    _non_int_char_pattern = re.compile(r"[^-0-9]")

    def __init__(self, key_extractor, join_function, table_path, attributes='*', webapi=None, access_key=None):
        Flow.__init__(self)
        NeedsV3ioAccess.__init__(self, webapi, access_key)
        self._key_extractor = key_extractor
        self._join_function = join_function
        self._table_path = table_path
        self._body = json.dumps({'AttributesToGet': attributes})

        self._client_session = None

    def _parse_response(self, response_body):
        response_object = json.loads(response_body)["Item"]
        for name, type_to_value in response_object.items():
            val = None
            for typ, value in type_to_value.items():
                if typ == 'S' or typ == 'BOOL':
                    val = value
                elif typ == 'N':
                    if self._non_int_char_pattern.search(value):
                        val = float(value)
                    else:
                        val = int(value)
                else:
                    raise Exception(f'Type {typ} in get item response is not supported')
            response_object[name] = val
        return response_object

    async def _worker(self):
        try:
            while True:
                response_object = None
                job = await self._q.get()
                if job is _termination_obj:
                    break
                element = job[0]
                request = job[1]
                response = await request
                response_body = await response.text()
                if response.status == 200:
                    response_object = self._parse_response(response_body)
                elif response.status == 404:
                    pass
                else:
                    raise Exception(f'Failed to get item. Response status code was {response.status}: {response_body}')
                if self._outlet and response_object:
                    joined_element = self._join_function(element, response_object)
                    await self._outlet.do(joined_element)
        except BaseException as ex:
            if not self._q.empty():
                await self._q.get()
            raise ex
        finally:
            await self._client_session.close()

    def _lazy_init(self):
        connector = aiohttp.TCPConnector()
        self._client_session = aiohttp.ClientSession(connector=connector)
        self._q = asyncio.queues.Queue(8)
        self._worker_awaitable = asyncio.get_running_loop().create_task(self._worker())

    async def do(self, element):
        if not self._client_session:
            self._lazy_init()

        if self._worker_awaitable.done():
            await self._worker_awaitable
            raise Exception("JoinWithTable worker has already terminated")

        if element is _termination_obj:
            await self._q.put(_termination_obj)
            await self._worker_awaitable
        else:
            key = self._key_extractor(element)
            request = self._client_session.put(f'{self._webapi_url}/{self._table_path}/{key}',
                                               headers=self._get_item_headers, data=self._body, verify_ssl=False)
            await self._q.put((element, asyncio.get_running_loop().create_task(request)))
            if self._worker_awaitable.done():
                await self._worker_awaitable


class Window(Flow, NeedsV3ioAccess):
    def __init__(self, window, key_column, time_column, emit_policy=EmitAfterMaxEvent(10), webapi=None,
                 access_key=None):
        Flow.__init__(self)
        NeedsV3ioAccess.__init__(self, webapi, access_key)
        self._windowed_store = WindowedStore(window)
        self._window = window
        self._key_column = key_column
        self._time_column = time_column
        self._emit_policy = emit_policy
        self._events_in_batch = 0
        self._emit_worker_running = False

    async def _emit_worker(self):
        while True:
            if isinstance(self._emit_policy, EmitAfterPeriod):
                await asyncio.sleep(self._window.period_millis / 1000)
            elif isinstance(self._emit_policy, EmitAfterWindow):
                await asyncio.sleep(self._window.window_millis / 1000)

            await self._outlet.do(self._windowed_store)

    async def do(self, element):
        if (not self._emit_worker_running) and \
                (isinstance(self._emit_policy, EmitAfterPeriod) or isinstance(self._emit_policy, EmitAfterWindow)):
            asyncio.get_running_loop().create_task(self._emit_worker())
            self._emit_worker_running = True
        key = element.pop(self._key_column)
        timestamp = element.pop(self._time_column)
        self._windowed_store.add(key, element, timestamp)
        self._events_in_batch = self._events_in_batch + 1

        if isinstance(self._emit_policy, EmitEveryEvent) or \
                isinstance(self._emit_policy,
                           EmitAfterMaxEvent) and self._events_in_batch == self._emit_policy.max_events:
            await self._outlet.do(self._windowed_store)
            self._events_in_batch = 0


def build_flow(steps):
    if len(steps) == 0:
        print('Cannot build an empty flow')
    cur_step = steps[0]
    for next_step in steps[1:]:
        cur_step = cur_step.to(next_step)
    return cur_step


async def aprint(element):
    print(element)


_counter = 0


async def raise_ex(element):
    global _counter
    if _counter == 500:
        raise Exception("test")
    _counter += 1
    return element


async def aprint_store(store):
    cache = store.cache
    print('store: ')
    for elem in cache:
        print(elem, '-', cache[elem].features, f'start time - {cache[elem].first_bucket_start_time}')
    print()


flow = build_flow([
    Source(),
    Map(lambda x: x + 1),
    JoinWithTable(lambda x: x, lambda x, y: y['secret'], '/bigdata/gal'),
    # Map(aprint)
])

start = time.monotonic()

mat = flow.run()
for outer in range(100):
    for i in range(10):
        mat.emit(i)
mat.terminate()
mat.await_termination()

end = time.monotonic()
print(end - start)
