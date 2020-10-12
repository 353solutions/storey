window.BENCHMARK_DATA = {
  "lastUpdate": 1602493998184,
  "repoUrl": "https://github.com/mlrun/storey",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "galt@iguazio.com",
            "name": "Gal Topper"
          },
          "committer": {
            "email": "galt@iguazio.com",
            "name": "Gal Topper"
          },
          "distinct": true,
          "id": "b1423309d997ba767b1b97138e4e2ba7e7812e28",
          "message": "Deploy GitHub pages on push.",
          "timestamp": "2020-10-12T12:11:17+03:00",
          "tree_id": "d1f566bccc74ca768a29aa6e251ce093117251de",
          "url": "https://github.com/mlrun/storey/commit/b1423309d997ba767b1b97138e4e2ba7e7812e28"
        },
        "date": 1602493997521,
        "tool": "pytest",
        "benches": [
          {
            "name": "bench/bench_flow.py::test_simple_flow_zero_events",
            "value": 1178.7734285281956,
            "unit": "iter/sec",
            "range": "stddev: 0.0001527551896669578",
            "extra": "mean: 848.3394482759844 usec\nrounds: 609"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_one_event",
            "value": 784.177150476456,
            "unit": "iter/sec",
            "range": "stddev: 0.00020903176140298099",
            "extra": "mean: 1.2752220584244425 msec\nrounds: 736"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_one_event",
            "value": 772.9531392898481,
            "unit": "iter/sec",
            "range": "stddev: 0.00023093092270880483",
            "extra": "mean: 1.2937394897169983 msec\nrounds: 778"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_1000_events",
            "value": 2.989403640280462,
            "unit": "iter/sec",
            "range": "stddev: 0.01772426510354947",
            "extra": "mean: 334.5148800000061 msec\nrounds: 5"
          }
        ]
      }
    ]
  }
}