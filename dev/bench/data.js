window.BENCHMARK_DATA = {
  "lastUpdate": 1603714091652,
  "repoUrl": "https://github.com/mlrun/storey",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "galt@iguaz.io",
            "name": "Gal Topper",
            "username": "gtopper"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "657577628afa1fbb26af178ad4557ba2c7e5d509",
          "message": "Add more benchmarks. (#20)\n\n* Add more benchmarks.\r\n\r\n* Better benchmarks.\r\n\r\nCo-authored-by: Gal Topper <galt@iguazio.com>",
          "timestamp": "2020-10-14T16:00:13+03:00",
          "tree_id": "1ce441b7e0b1ab1c38e1c06c9bcb93dcf263fbd2",
          "url": "https://github.com/mlrun/storey/commit/657577628afa1fbb26af178ad4557ba2c7e5d509"
        },
        "date": 1602680618974,
        "tool": "pytest",
        "benches": [
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[0]",
            "value": 1117.2901185166188,
            "unit": "iter/sec",
            "range": "stddev: 0.00007117692377137618",
            "extra": "mean: 895.0226833901115 usec\nrounds: 578"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1]",
            "value": 713.6972502353996,
            "unit": "iter/sec",
            "range": "stddev: 0.0003779808083959806",
            "extra": "mean: 1.4011543405416915 msec\nrounds: 555"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1000]",
            "value": 3.157794824213928,
            "unit": "iter/sec",
            "range": "stddev: 0.00840123239815128",
            "extra": "mean: 316.6766859999939 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[5000]",
            "value": 0.6313227349913888,
            "unit": "iter/sec",
            "range": "stddev: 0.05700459447126654",
            "extra": "mean: 1.5839759041999968 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[0]",
            "value": 3434.319209179311,
            "unit": "iter/sec",
            "range": "stddev: 0.00005133746081838018",
            "extra": "mean: 291.1785245026676 usec\nrounds: 2061"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1]",
            "value": 2385.665360984157,
            "unit": "iter/sec",
            "range": "stddev: 0.00010617017718138104",
            "extra": "mean: 419.1702727273832 usec\nrounds: 1881"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1000]",
            "value": 11.123432145518352,
            "unit": "iter/sec",
            "range": "stddev: 0.002591235961475489",
            "extra": "mean: 89.90031016666933 msec\nrounds: 12"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[5000]",
            "value": 2.230884358508166,
            "unit": "iter/sec",
            "range": "stddev: 0.0077510605921119755",
            "extra": "mean: 448.2527282000035 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[0]",
            "value": 971.3106197089425,
            "unit": "iter/sec",
            "range": "stddev: 0.0005474349570327562",
            "extra": "mean: 1.0295367719748132 msec\nrounds: 785"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1]",
            "value": 669.6711152386642,
            "unit": "iter/sec",
            "range": "stddev: 0.0005873822650437438",
            "extra": "mean: 1.493270319182887 msec\nrounds: 636"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1000]",
            "value": 2.6453414112437894,
            "unit": "iter/sec",
            "range": "stddev: 0.007098457905829306",
            "extra": "mean: 378.02303920000213 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[5000]",
            "value": 0.531932938479951,
            "unit": "iter/sec",
            "range": "stddev: 0.02034697801123083",
            "extra": "mean: 1.8799362244000064 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[0]",
            "value": 1066.435181794031,
            "unit": "iter/sec",
            "range": "stddev: 0.00009209482037622099",
            "extra": "mean: 937.7034976638064 usec\nrounds: 856"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1]",
            "value": 397.1533921201151,
            "unit": "iter/sec",
            "range": "stddev: 0.0008294443554020983",
            "extra": "mean: 2.5179188188768133 msec\nrounds: 392"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1000]",
            "value": 0.7547258087468914,
            "unit": "iter/sec",
            "range": "stddev: 0.006846319925187341",
            "extra": "mean: 1.3249845022000102 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[5000]",
            "value": 0.1495195692642256,
            "unit": "iter/sec",
            "range": "stddev: 0.056703283088359195",
            "extra": "mean: 6.68808775280001 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[0]",
            "value": 1082.2941566395525,
            "unit": "iter/sec",
            "range": "stddev: 0.00015006058621671876",
            "extra": "mean: 923.9632255845581 usec\nrounds: 727"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1]",
            "value": 676.9379112302706,
            "unit": "iter/sec",
            "range": "stddev: 0.0007799918985845292",
            "extra": "mean: 1.4772403545586545 msec\nrounds: 691"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1000]",
            "value": 3.4226174221812546,
            "unit": "iter/sec",
            "range": "stddev: 0.003954064791707921",
            "extra": "mean: 292.17405180000924 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[5000]",
            "value": 0.6838691505048222,
            "unit": "iter/sec",
            "range": "stddev: 0.014112728869019582",
            "extra": "mean: 1.4622680366000054 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "33829179+talIguaz@users.noreply.github.com",
            "name": "Tal Neiman",
            "username": "talIguaz"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8fe21463dba6e9a4d65d87e2e63d3aa986a197ce",
          "message": "Refactor persistence (#19)\n\n* refactor persistence to use v3io arrays\r\n\r\n* run conditional update after mtime cond evaluates to false\r\n\r\n* create a workaround for enging bug + fix lint + remove spaces in update expressions\r\n\r\n* break long lines\r\n\r\n* fix lint\r\n\r\n* code review fixes\r\n\r\n* replace double quates with single quates + make test parametarized\r\n\r\n* review fixes",
          "timestamp": "2020-10-15T14:39:54+03:00",
          "tree_id": "f05faa4b7f769690ab9e508b97917c512813f0ce",
          "url": "https://github.com/mlrun/storey/commit/8fe21463dba6e9a4d65d87e2e63d3aa986a197ce"
        },
        "date": 1602762219575,
        "tool": "pytest",
        "benches": [
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[0]",
            "value": 1097.824634655155,
            "unit": "iter/sec",
            "range": "stddev: 0.00013389337192116078",
            "extra": "mean: 910.8922941177364 usec\nrounds: 340"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1]",
            "value": 665.4572155122935,
            "unit": "iter/sec",
            "range": "stddev: 0.0002529646679791538",
            "extra": "mean: 1.5027262109257664 msec\nrounds: 659"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1000]",
            "value": 2.52200476394189,
            "unit": "iter/sec",
            "range": "stddev: 0.02260060560741257",
            "extra": "mean: 396.5099568000028 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[5000]",
            "value": 0.5049428380273163,
            "unit": "iter/sec",
            "range": "stddev: 0.04140622526138037",
            "extra": "mean: 1.9804221878000021 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[0]",
            "value": 3475.3660503061524,
            "unit": "iter/sec",
            "range": "stddev: 0.00005252892024600168",
            "extra": "mean: 287.73947420931614 usec\nrounds: 2404"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1]",
            "value": 2290.542907559454,
            "unit": "iter/sec",
            "range": "stddev: 0.00007941328962458165",
            "extra": "mean: 436.57771993692455 usec\nrounds: 1896"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1000]",
            "value": 10.539370388169239,
            "unit": "iter/sec",
            "range": "stddev: 0.002141042301971389",
            "extra": "mean: 94.8823281818172 msec\nrounds: 11"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[5000]",
            "value": 2.1053751434634513,
            "unit": "iter/sec",
            "range": "stddev: 0.009942206232760905",
            "extra": "mean: 474.9747346000049 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[0]",
            "value": 1086.0313020322542,
            "unit": "iter/sec",
            "range": "stddev: 0.00023749363913627396",
            "extra": "mean: 920.7837731092403 usec\nrounds: 714"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1]",
            "value": 659.3894064730937,
            "unit": "iter/sec",
            "range": "stddev: 0.0002641557700509702",
            "extra": "mean: 1.516554543010853 msec\nrounds: 744"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1000]",
            "value": 2.4079538649793624,
            "unit": "iter/sec",
            "range": "stddev: 0.008875678814211483",
            "extra": "mean: 415.2903486000014 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[5000]",
            "value": 0.49552009120663293,
            "unit": "iter/sec",
            "range": "stddev: 0.03107654384904316",
            "extra": "mean: 2.018081643400001 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[0]",
            "value": 974.4387683003703,
            "unit": "iter/sec",
            "range": "stddev: 0.0003303154120311613",
            "extra": "mean: 1.0262317474747171 msec\nrounds: 396"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1]",
            "value": 364.525122736944,
            "unit": "iter/sec",
            "range": "stddev: 0.000607769469403425",
            "extra": "mean: 2.7432951465505444 msec\nrounds: 348"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1000]",
            "value": 0.709930303738259,
            "unit": "iter/sec",
            "range": "stddev: 0.02291680483106593",
            "extra": "mean: 1.408588976599998 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[5000]",
            "value": 0.14142267527892194,
            "unit": "iter/sec",
            "range": "stddev: 0.04736792357024758",
            "extra": "mean: 7.071001860399986 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[0]",
            "value": 1083.8078975703806,
            "unit": "iter/sec",
            "range": "stddev: 0.0001389070536538002",
            "extra": "mean: 922.6727377072483 usec\nrounds: 488"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1]",
            "value": 651.895021624323,
            "unit": "iter/sec",
            "range": "stddev: 0.00026364562378961714",
            "extra": "mean: 1.5339893185689712 msec\nrounds: 587"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1000]",
            "value": 2.7441061229785872,
            "unit": "iter/sec",
            "range": "stddev: 0.0026817583900674534",
            "extra": "mean: 364.4173931999944 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[5000]",
            "value": 0.547703637383912,
            "unit": "iter/sec",
            "range": "stddev: 0.021330715667904485",
            "extra": "mean: 1.825804927600018 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "33829179+talIguaz@users.noreply.github.com",
            "name": "Tal Neiman",
            "username": "talIguaz"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8573a472b5785d4a984c429478f4933940b19118",
          "message": "add aggregation related documentation (#22)\n\n* add aggregation related documentation\r\n\r\n* review comments\r\n\r\n* minor review fix",
          "timestamp": "2020-10-18T13:00:46+03:00",
          "tree_id": "9f0cae12fb889efcc45cc0aefb94262931ade870",
          "url": "https://github.com/mlrun/storey/commit/8573a472b5785d4a984c429478f4933940b19118"
        },
        "date": 1603015435736,
        "tool": "pytest",
        "benches": [
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[0]",
            "value": 1271.2906205148429,
            "unit": "iter/sec",
            "range": "stddev: 0.00018017622428829995",
            "extra": "mean: 786.6022008366768 usec\nrounds: 478"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1]",
            "value": 837.9916360300243,
            "unit": "iter/sec",
            "range": "stddev: 0.0003507467427824947",
            "extra": "mean: 1.1933293329006105 msec\nrounds: 772"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1000]",
            "value": 3.6119665987780984,
            "unit": "iter/sec",
            "range": "stddev: 0.006200310872736167",
            "extra": "mean: 276.8574881999996 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[5000]",
            "value": 0.7563567698015289,
            "unit": "iter/sec",
            "range": "stddev: 0.01837535005078574",
            "extra": "mean: 1.322127387400002 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[0]",
            "value": 4897.233989258138,
            "unit": "iter/sec",
            "range": "stddev: 0.00006692530007330289",
            "extra": "mean: 204.19690016720764 usec\nrounds: 2995"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1]",
            "value": 3176.7429003659727,
            "unit": "iter/sec",
            "range": "stddev: 0.0000985906244720822",
            "extra": "mean: 314.7878287175195 usec\nrounds: 2347"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1000]",
            "value": 13.545503428632111,
            "unit": "iter/sec",
            "range": "stddev: 0.004381482522471613",
            "extra": "mean: 73.82523693333005 msec\nrounds: 15"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[5000]",
            "value": 2.8517466159800255,
            "unit": "iter/sec",
            "range": "stddev: 0.01052282154076737",
            "extra": "mean: 350.66229039999826 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[0]",
            "value": 1256.4988511574259,
            "unit": "iter/sec",
            "range": "stddev: 0.0005082602827997118",
            "extra": "mean: 795.8622477679534 usec\nrounds: 896"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1]",
            "value": 818.0800014159613,
            "unit": "iter/sec",
            "range": "stddev: 0.00012054713672296694",
            "extra": "mean: 1.2223743378021283 msec\nrounds: 746"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1000]",
            "value": 3.3738638248720387,
            "unit": "iter/sec",
            "range": "stddev: 0.005112258580164949",
            "extra": "mean: 296.3960764000092 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[5000]",
            "value": 0.6643087053086892,
            "unit": "iter/sec",
            "range": "stddev: 0.04510339441050078",
            "extra": "mean: 1.50532424459999 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[0]",
            "value": 1142.9283908271411,
            "unit": "iter/sec",
            "range": "stddev: 0.00034513022912423193",
            "extra": "mean: 874.9454541734644 usec\nrounds: 982"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1]",
            "value": 418.90963366976615,
            "unit": "iter/sec",
            "range": "stddev: 0.0008860857347480032",
            "extra": "mean: 2.3871496848609537 msec\nrounds: 403"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1000]",
            "value": 0.8411445341501133,
            "unit": "iter/sec",
            "range": "stddev: 0.0321086835862927",
            "extra": "mean: 1.188856325400002 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[5000]",
            "value": 0.16825152076703703,
            "unit": "iter/sec",
            "range": "stddev: 0.04682069283441367",
            "extra": "mean: 5.943482682600006 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[0]",
            "value": 1300.6124560744993,
            "unit": "iter/sec",
            "range": "stddev: 0.0001583146643442701",
            "extra": "mean: 768.8685398402181 usec\nrounds: 1117"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1]",
            "value": 806.6849699987548,
            "unit": "iter/sec",
            "range": "stddev: 0.000552130371218832",
            "extra": "mean: 1.239641293926108 msec\nrounds: 609"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1000]",
            "value": 4.163968269488784,
            "unit": "iter/sec",
            "range": "stddev: 0.008739766549724914",
            "extra": "mean: 240.155528400021 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[5000]",
            "value": 0.7647447505228915,
            "unit": "iter/sec",
            "range": "stddev: 0.0723057243137078",
            "extra": "mean: 1.3076258441999813 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "galt@iguaz.io",
            "name": "Gal Topper",
            "username": "gtopper"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ec4a2ca2dde8fa0bcd82e26a699e2969a73ae15d",
          "message": "Add dataframe source. (#21)\n\n* Add dataframe source.\r\n\r\n* Fix linter.\r\n\r\n* Code review round of improvements.\r\n\r\n* Use data in DataFrame index.\r\n\r\nCo-authored-by: Gal Topper <galt@iguazio.com>",
          "timestamp": "2020-10-18T15:08:47+03:00",
          "tree_id": "141e5565778d7741140eb173300373e2c6d71364",
          "url": "https://github.com/mlrun/storey/commit/ec4a2ca2dde8fa0bcd82e26a699e2969a73ae15d"
        },
        "date": 1603023134720,
        "tool": "pytest",
        "benches": [
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[0]",
            "value": 1294.7240932749787,
            "unit": "iter/sec",
            "range": "stddev: 0.000047852677516872664",
            "extra": "mean: 772.3653287941218 usec\nrounds: 514"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1]",
            "value": 846.511120465394,
            "unit": "iter/sec",
            "range": "stddev: 0.00008017929952781399",
            "extra": "mean: 1.181319389460851 msec\nrounds: 778"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1000]",
            "value": 4.228576726422461,
            "unit": "iter/sec",
            "range": "stddev: 0.0028100417620315486",
            "extra": "mean: 236.4861901999916 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[5000]",
            "value": 0.835195554802751,
            "unit": "iter/sec",
            "range": "stddev: 0.01545933642904874",
            "extra": "mean: 1.1973243802000013 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[0]",
            "value": 4937.728423661964,
            "unit": "iter/sec",
            "range": "stddev: 0.000014604578862252099",
            "extra": "mean: 202.52227627747308 usec\nrounds: 2407"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1]",
            "value": 3329.1070754098328,
            "unit": "iter/sec",
            "range": "stddev: 0.000020431792228584083",
            "extra": "mean: 300.38084607924304 usec\nrounds: 2066"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1000]",
            "value": 14.657382683081265,
            "unit": "iter/sec",
            "range": "stddev: 0.000825763315678846",
            "extra": "mean: 68.22500453333191 msec\nrounds: 15"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[5000]",
            "value": 2.914856835943688,
            "unit": "iter/sec",
            "range": "stddev: 0.0030226485980689288",
            "extra": "mean: 343.070022400002 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[0]",
            "value": 1245.311019819044,
            "unit": "iter/sec",
            "range": "stddev: 0.00016136086731847514",
            "extra": "mean: 803.0122468082791 usec\nrounds: 705"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1]",
            "value": 765.5586215976356,
            "unit": "iter/sec",
            "range": "stddev: 0.00015036356010437926",
            "extra": "mean: 1.3062356974219838 msec\nrounds: 737"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1000]",
            "value": 3.5037037792799524,
            "unit": "iter/sec",
            "range": "stddev: 0.006260164785399593",
            "extra": "mean: 285.41225599999507 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[5000]",
            "value": 0.7125992293072847,
            "unit": "iter/sec",
            "range": "stddev: 0.02999537119368206",
            "extra": "mean: 1.4033133336000048 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[0]",
            "value": 1245.7122695265966,
            "unit": "iter/sec",
            "range": "stddev: 0.00007559202626938244",
            "extra": "mean: 802.7535928341031 usec\nrounds: 921"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1]",
            "value": 428.26523345114236,
            "unit": "iter/sec",
            "range": "stddev: 0.0008426699523010798",
            "extra": "mean: 2.3350015875479246 msec\nrounds: 257"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1000]",
            "value": 0.8970302095664147,
            "unit": "iter/sec",
            "range": "stddev: 0.01468300759704238",
            "extra": "mean: 1.1147896574000071 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[5000]",
            "value": 0.17365344513784825,
            "unit": "iter/sec",
            "range": "stddev: 0.06811503682420289",
            "extra": "mean: 5.758595801000018 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[0]",
            "value": 1245.3629837164733,
            "unit": "iter/sec",
            "range": "stddev: 0.00026555768460232316",
            "extra": "mean: 802.9787403956321 usec\nrounds: 963"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1]",
            "value": 796.5421044455439,
            "unit": "iter/sec",
            "range": "stddev: 0.00046180514532475546",
            "extra": "mean: 1.2554264167819211 msec\nrounds: 715"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1000]",
            "value": 4.26195984458997,
            "unit": "iter/sec",
            "range": "stddev: 0.009651713320948956",
            "extra": "mean: 234.6338390000028 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[5000]",
            "value": 0.872084464963665,
            "unit": "iter/sec",
            "range": "stddev: 0.011936187555909566",
            "extra": "mean: 1.1466779195999834 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "33829179+talIguaz@users.noreply.github.com",
            "name": "Tal Neiman",
            "username": "talIguaz"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "711560be222b2ca3d8c6062be9eb8880cea7b025",
          "message": "add sqr aggregations (#23)\n\n* add sqr aggregations\r\n\r\n* add sqr doc",
          "timestamp": "2020-10-18T22:13:15+03:00",
          "tree_id": "bdac923e8cc3924426b19e815b7036a0c0147722",
          "url": "https://github.com/mlrun/storey/commit/711560be222b2ca3d8c6062be9eb8880cea7b025"
        },
        "date": 1603048633064,
        "tool": "pytest",
        "benches": [
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[0]",
            "value": 1294.4728117506688,
            "unit": "iter/sec",
            "range": "stddev: 0.00017883007306708956",
            "extra": "mean: 772.5152594341333 usec\nrounds: 424"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1]",
            "value": 840.8855109158212,
            "unit": "iter/sec",
            "range": "stddev: 0.00028550036223371004",
            "extra": "mean: 1.189222536265234 msec\nrounds: 841"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1000]",
            "value": 3.8312775289408094,
            "unit": "iter/sec",
            "range": "stddev: 0.011429493488477722",
            "extra": "mean: 261.00954379999166 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[5000]",
            "value": 0.7831682630971858,
            "unit": "iter/sec",
            "range": "stddev: 0.04045393923009433",
            "extra": "mean: 1.2768648158000075 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[0]",
            "value": 4949.247569749311,
            "unit": "iter/sec",
            "range": "stddev: 0.000014329585305937367",
            "extra": "mean: 202.05091499406484 usec\nrounds: 2541"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1]",
            "value": 3334.2686077775247,
            "unit": "iter/sec",
            "range": "stddev: 0.00002132472089443485",
            "extra": "mean: 299.9158489113316 usec\nrounds: 2204"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1000]",
            "value": 14.736179192424792,
            "unit": "iter/sec",
            "range": "stddev: 0.0014763748433510595",
            "extra": "mean: 67.86019543750221 msec\nrounds: 16"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[5000]",
            "value": 3.0259117812789613,
            "unit": "iter/sec",
            "range": "stddev: 0.0027848127900411256",
            "extra": "mean: 330.4789009999922 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[0]",
            "value": 1324.5916216502417,
            "unit": "iter/sec",
            "range": "stddev: 0.00009766010822531698",
            "extra": "mean: 754.9496642249258 usec\nrounds: 819"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1]",
            "value": 834.0374784286383,
            "unit": "iter/sec",
            "range": "stddev: 0.00011466616560314674",
            "extra": "mean: 1.198986887116922 msec\nrounds: 753"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1000]",
            "value": 3.5873622920314445,
            "unit": "iter/sec",
            "range": "stddev: 0.005526445982063484",
            "extra": "mean: 278.7563447999901 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[5000]",
            "value": 0.6712826826928154,
            "unit": "iter/sec",
            "range": "stddev: 0.049832162914629996",
            "extra": "mean: 1.4896853825999983 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[0]",
            "value": 1190.9339297331094,
            "unit": "iter/sec",
            "range": "stddev: 0.0002138822967391535",
            "extra": "mean: 839.6771433190269 usec\nrounds: 621"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1]",
            "value": 424.2083874602109,
            "unit": "iter/sec",
            "range": "stddev: 0.000802878778279671",
            "extra": "mean: 2.357331984846236 msec\nrounds: 264"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1000]",
            "value": 0.8145117124778074,
            "unit": "iter/sec",
            "range": "stddev: 0.021075636526624145",
            "extra": "mean: 1.2277294294000058 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[5000]",
            "value": 0.16256722194415743,
            "unit": "iter/sec",
            "range": "stddev: 0.09043816234857878",
            "extra": "mean: 6.151301523399991 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[0]",
            "value": 1281.0174699223494,
            "unit": "iter/sec",
            "range": "stddev: 0.00022589614526367913",
            "extra": "mean: 780.629478894317 usec\nrounds: 687"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1]",
            "value": 805.9982241297962,
            "unit": "iter/sec",
            "range": "stddev: 0.00024142318034898056",
            "extra": "mean: 1.2406975227267525 msec\nrounds: 748"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1000]",
            "value": 3.6388382739828096,
            "unit": "iter/sec",
            "range": "stddev: 0.01419370559412825",
            "extra": "mean: 274.81298279999464 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[5000]",
            "value": 0.7059275240309029,
            "unit": "iter/sec",
            "range": "stddev: 0.09346179060989224",
            "extra": "mean: 1.416576016600004 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "galt@iguaz.io",
            "name": "Gal Topper",
            "username": "gtopper"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3ab4af7894e916d8c138d6abdf38708c93070429",
          "message": "Break flow.py into multiple files. (#24)\n\n* Break flow.py into multiple files.\r\n\r\n* Fix integration tests.\r\n\r\n* Extract writers from flow.py.\r\n\r\nCo-authored-by: Gal Topper <galt@iguazio.com>",
          "timestamp": "2020-10-19T14:48:04+03:00",
          "tree_id": "4869ccbab7ec8433d53337dc813fd5e022ca619d",
          "url": "https://github.com/mlrun/storey/commit/3ab4af7894e916d8c138d6abdf38708c93070429"
        },
        "date": 1603108282888,
        "tool": "pytest",
        "benches": [
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[0]",
            "value": 1437.127304659381,
            "unit": "iter/sec",
            "range": "stddev: 0.00008179324650838057",
            "extra": "mean: 695.8325798680819 usec\nrounds: 457"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1]",
            "value": 905.9338181289186,
            "unit": "iter/sec",
            "range": "stddev: 0.00010742307286439592",
            "extra": "mean: 1.103833392670297 msec\nrounds: 955"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1000]",
            "value": 4.257618596340569,
            "unit": "iter/sec",
            "range": "stddev: 0.009017563680860536",
            "extra": "mean: 234.87308160000566 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[5000]",
            "value": 0.8398067260805626,
            "unit": "iter/sec",
            "range": "stddev: 0.025645040777885826",
            "extra": "mean: 1.1907501678000016 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[0]",
            "value": 5536.233669450053,
            "unit": "iter/sec",
            "range": "stddev: 0.00002691058019140334",
            "extra": "mean: 180.62821400010307 usec\nrounds: 2500"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1]",
            "value": 3605.4061152542126,
            "unit": "iter/sec",
            "range": "stddev: 0.00003455276194210982",
            "extra": "mean: 277.36126473216774 usec\nrounds: 2240"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1000]",
            "value": 15.574872858625616,
            "unit": "iter/sec",
            "range": "stddev: 0.0034154983889958753",
            "extra": "mean: 64.20598158823388 msec\nrounds: 17"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[5000]",
            "value": 3.2187074469775903,
            "unit": "iter/sec",
            "range": "stddev: 0.007589181516853742",
            "extra": "mean: 310.68371900000216 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[0]",
            "value": 1368.6198889237505,
            "unit": "iter/sec",
            "range": "stddev: 0.00010610961734905463",
            "extra": "mean: 730.6630629095823 usec\nrounds: 763"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1]",
            "value": 870.7376788083403,
            "unit": "iter/sec",
            "range": "stddev: 0.0001496021127912769",
            "extra": "mean: 1.1484515076556274 msec\nrounds: 849"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1000]",
            "value": 3.7439213281483266,
            "unit": "iter/sec",
            "range": "stddev: 0.00646976487570129",
            "extra": "mean: 267.0996296000112 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[5000]",
            "value": 0.7950998075192186,
            "unit": "iter/sec",
            "range": "stddev: 0.021420670683736726",
            "extra": "mean: 1.2577037379999978 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[0]",
            "value": 1330.773007443913,
            "unit": "iter/sec",
            "range": "stddev: 0.0000912024216797802",
            "extra": "mean: 751.4429541374254 usec\nrounds: 1003"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1]",
            "value": 456.06136398082083,
            "unit": "iter/sec",
            "range": "stddev: 0.0007392365585547187",
            "extra": "mean: 2.192687385906371 msec\nrounds: 298"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1000]",
            "value": 0.9840016923223265,
            "unit": "iter/sec",
            "range": "stddev: 0.01562054298327297",
            "extra": "mean: 1.0162584147999951 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[5000]",
            "value": 0.19220721164096702,
            "unit": "iter/sec",
            "range": "stddev: 0.047946092050408375",
            "extra": "mean: 5.202718417599999 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[0]",
            "value": 1375.862891898813,
            "unit": "iter/sec",
            "range": "stddev: 0.00006777097992183497",
            "extra": "mean: 726.8166078815538 usec\nrounds: 1015"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1]",
            "value": 882.2205796672743,
            "unit": "iter/sec",
            "range": "stddev: 0.00009765148998395137",
            "extra": "mean: 1.1335033698456067 msec\nrounds: 776"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1000]",
            "value": 4.6247795890167405,
            "unit": "iter/sec",
            "range": "stddev: 0.004932183525939327",
            "extra": "mean: 216.22652080001217 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[5000]",
            "value": 0.9136149083578483,
            "unit": "iter/sec",
            "range": "stddev: 0.03405470182665542",
            "extra": "mean: 1.0945530669999926 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "33829179+talIguaz@users.noreply.github.com",
            "name": "Tal Neiman",
            "username": "talIguaz"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "cf03414b5456214ac09a0a6fa5635e0ca5337bda",
          "message": "fix loading aggregation (#25)",
          "timestamp": "2020-10-19T19:44:45+03:00",
          "tree_id": "4722fbc1fb7f728711ea2ad677142013b25670e4",
          "url": "https://github.com/mlrun/storey/commit/cf03414b5456214ac09a0a6fa5635e0ca5337bda"
        },
        "date": 1603126090010,
        "tool": "pytest",
        "benches": [
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[0]",
            "value": 1168.6393157761433,
            "unit": "iter/sec",
            "range": "stddev: 0.0005704597842299665",
            "extra": "mean: 855.696010309098 usec\nrounds: 582"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1]",
            "value": 831.7972053182802,
            "unit": "iter/sec",
            "range": "stddev: 0.00023261313902165172",
            "extra": "mean: 1.2022161094149846 msec\nrounds: 786"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1000]",
            "value": 3.8833989489378307,
            "unit": "iter/sec",
            "range": "stddev: 0.0063834697522028045",
            "extra": "mean: 257.506378599993 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[5000]",
            "value": 0.8048790245569266,
            "unit": "iter/sec",
            "range": "stddev: 0.016580596616696846",
            "extra": "mean: 1.2424227361999953 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[0]",
            "value": 4896.109095952786,
            "unit": "iter/sec",
            "range": "stddev: 0.000026064512864651555",
            "extra": "mean: 204.24381491552512 usec\nrounds: 2588"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1]",
            "value": 3257.581176506211,
            "unit": "iter/sec",
            "range": "stddev: 0.00005787469616700382",
            "extra": "mean: 306.97623353549403 usec\nrounds: 2475"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1000]",
            "value": 14.089827691936932,
            "unit": "iter/sec",
            "range": "stddev: 0.0005080727223466955",
            "extra": "mean: 70.9731887333343 msec\nrounds: 15"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[5000]",
            "value": 2.816177324043156,
            "unit": "iter/sec",
            "range": "stddev: 0.0005800772403544425",
            "extra": "mean: 355.09127620000527 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[0]",
            "value": 1290.6976961517737,
            "unit": "iter/sec",
            "range": "stddev: 0.0002474041979213516",
            "extra": "mean: 774.7747617288762 usec\nrounds: 810"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1]",
            "value": 789.5964560052646,
            "unit": "iter/sec",
            "range": "stddev: 0.0003767489724978119",
            "extra": "mean: 1.2664697167705279 msec\nrounds: 805"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1000]",
            "value": 3.537268910372346,
            "unit": "iter/sec",
            "range": "stddev: 0.0038570628105573787",
            "extra": "mean: 282.70398020000584 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[5000]",
            "value": 0.7227343538491663,
            "unit": "iter/sec",
            "range": "stddev: 0.01935009048462406",
            "extra": "mean: 1.383634242200003 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[0]",
            "value": 1270.4615819201924,
            "unit": "iter/sec",
            "range": "stddev: 0.00004349547844158417",
            "extra": "mean: 787.1154974151889 usec\nrounds: 967"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1]",
            "value": 421.07880554524394,
            "unit": "iter/sec",
            "range": "stddev: 0.0010288644005821456",
            "extra": "mean: 2.3748523716484047 msec\nrounds: 261"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1000]",
            "value": 0.8887564995627111,
            "unit": "iter/sec",
            "range": "stddev: 0.016260806734524128",
            "extra": "mean: 1.1251675802000023 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[5000]",
            "value": 0.1775699529984517,
            "unit": "iter/sec",
            "range": "stddev: 0.020397261942012194",
            "extra": "mean: 5.631583401999995 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[0]",
            "value": 1336.8236298789611,
            "unit": "iter/sec",
            "range": "stddev: 0.000049872247760828665",
            "extra": "mean: 748.0418341277691 usec\nrounds: 1049"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1]",
            "value": 836.4602764446977,
            "unit": "iter/sec",
            "range": "stddev: 0.00007182283296287975",
            "extra": "mean: 1.195514034749401 msec\nrounds: 777"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1000]",
            "value": 4.110637749251056,
            "unit": "iter/sec",
            "range": "stddev: 0.010215552984739",
            "extra": "mean: 243.27125399998977 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[5000]",
            "value": 0.875479212851474,
            "unit": "iter/sec",
            "range": "stddev: 0.019403372585866215",
            "extra": "mean: 1.142231574799996 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "33829179+talIguaz@users.noreply.github.com",
            "name": "Tal Neiman",
            "username": "talIguaz"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "94abeaa4415a00dc82cf9d110a29456390f2faf2",
          "message": "save aggr time when loading an aggregation (#26)\n\n* save aggr time when loading an aggregation\r\n\r\n* add tests + fix bugs\r\n\r\n* don't pop initial data\r\n\r\n* change to test to actually test 1 window + rename tests",
          "timestamp": "2020-10-22T11:28:26+03:00",
          "tree_id": "c7423f42887ed7bdec1dd284ce0797b9f514b5d2",
          "url": "https://github.com/mlrun/storey/commit/94abeaa4415a00dc82cf9d110a29456390f2faf2"
        },
        "date": 1603355560994,
        "tool": "pytest",
        "benches": [
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[0]",
            "value": 1165.096421001706,
            "unit": "iter/sec",
            "range": "stddev: 0.0003859594443468905",
            "extra": "mean: 858.2980618378672 usec\nrounds: 566"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1]",
            "value": 753.1591284312436,
            "unit": "iter/sec",
            "range": "stddev: 0.00015338242685505115",
            "extra": "mean: 1.3277406622992163 msec\nrounds: 687"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1000]",
            "value": 2.958917770806892,
            "unit": "iter/sec",
            "range": "stddev: 0.021148520604555902",
            "extra": "mean: 337.96140260001266 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[5000]",
            "value": 0.6501915884053222,
            "unit": "iter/sec",
            "range": "stddev: 0.030285022323057353",
            "extra": "mean: 1.5380082083999695 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[0]",
            "value": 4283.647135787445,
            "unit": "iter/sec",
            "range": "stddev: 0.00009973391976644109",
            "extra": "mean: 233.44593247318772 usec\nrounds: 1866"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1]",
            "value": 2893.425063043567,
            "unit": "iter/sec",
            "range": "stddev: 0.00006706697128443046",
            "extra": "mean: 345.61116262264943 usec\nrounds: 2183"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1000]",
            "value": 12.49625528511342,
            "unit": "iter/sec",
            "range": "stddev: 0.006388976019507539",
            "extra": "mean: 80.0239733571451 msec\nrounds: 14"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[5000]",
            "value": 2.555942470037653,
            "unit": "iter/sec",
            "range": "stddev: 0.012540764643488371",
            "extra": "mean: 391.24511279992475 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[0]",
            "value": 1016.8008185584221,
            "unit": "iter/sec",
            "range": "stddev: 0.00035609497972219405",
            "extra": "mean: 983.4767849791451 usec\nrounds: 679"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1]",
            "value": 679.2830993013355,
            "unit": "iter/sec",
            "range": "stddev: 0.00048783068556407824",
            "extra": "mean: 1.472140262327345 msec\nrounds: 568"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1000]",
            "value": 2.630821269458024,
            "unit": "iter/sec",
            "range": "stddev: 0.023239363720746194",
            "extra": "mean: 380.1094402000217 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[5000]",
            "value": 0.5405966445954057,
            "unit": "iter/sec",
            "range": "stddev: 0.041713784407944925",
            "extra": "mean: 1.8498080037999898 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[0]",
            "value": 1167.7218508384149,
            "unit": "iter/sec",
            "range": "stddev: 0.0000882043743296227",
            "extra": "mean: 856.3683203170413 usec\nrounds: 871"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1]",
            "value": 380.10873625628136,
            "unit": "iter/sec",
            "range": "stddev: 0.0007820633628928828",
            "extra": "mean: 2.63082614161693 msec\nrounds: 346"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1000]",
            "value": 0.7202809961029044,
            "unit": "iter/sec",
            "range": "stddev: 0.015138637831419582",
            "extra": "mean: 1.388347055399936 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[5000]",
            "value": 0.14003110763105875,
            "unit": "iter/sec",
            "range": "stddev: 0.039484122549143956",
            "extra": "mean: 7.141270371399969 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[0]",
            "value": 1095.4670526975458,
            "unit": "iter/sec",
            "range": "stddev: 0.0005964015206558025",
            "extra": "mean: 912.8526481353667 usec\nrounds: 1043"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1]",
            "value": 732.9446197954015,
            "unit": "iter/sec",
            "range": "stddev: 0.00019953256938245423",
            "extra": "mean: 1.3643595614074442 msec\nrounds: 627"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1000]",
            "value": 3.4397196069913107,
            "unit": "iter/sec",
            "range": "stddev: 0.006885020178370621",
            "extra": "mean: 290.72137099997235 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[5000]",
            "value": 0.6904209623948929,
            "unit": "iter/sec",
            "range": "stddev: 0.03948798623456343",
            "extra": "mean: 1.4483917124000072 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "galt@iguaz.io",
            "name": "Gal Topper",
            "username": "gtopper"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e47cc9a1dd32dc022fef3768bf47a136f6a792f0",
          "message": "Add ToDataFrame sink. (#27)\n\n* Add ToDataFrame sink.\r\n\r\n* Docu. Extra test.\r\n\r\nCo-authored-by: Gal Topper <galt@iguazio.com>",
          "timestamp": "2020-10-26T10:39:21+02:00",
          "tree_id": "9fd02e8acc44f7c49ef3c06a17c1f059c51e4d02",
          "url": "https://github.com/mlrun/storey/commit/e47cc9a1dd32dc022fef3768bf47a136f6a792f0"
        },
        "date": 1603701777349,
        "tool": "pytest",
        "benches": [
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[0]",
            "value": 1282.970317674116,
            "unit": "iter/sec",
            "range": "stddev: 0.000057865041941389586",
            "extra": "mean: 779.4412592591308 usec\nrounds: 621"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1]",
            "value": 822.1580527682183,
            "unit": "iter/sec",
            "range": "stddev: 0.00007685062489930403",
            "extra": "mean: 1.2163111419184975 msec\nrounds: 761"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1000]",
            "value": 3.960746931978405,
            "unit": "iter/sec",
            "range": "stddev: 0.0024316100245527703",
            "extra": "mean: 252.47763040000564 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[5000]",
            "value": 0.8021426199651045,
            "unit": "iter/sec",
            "range": "stddev: 0.010217152203915688",
            "extra": "mean: 1.24666109879999 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[0]",
            "value": 4766.392932794035,
            "unit": "iter/sec",
            "range": "stddev: 0.000009067357147496654",
            "extra": "mean: 209.802258038723 usec\nrounds: 2488"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1]",
            "value": 3190.758060462409,
            "unit": "iter/sec",
            "range": "stddev: 0.000009990365370083385",
            "extra": "mean: 313.40514731946763 usec\nrounds: 2145"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1000]",
            "value": 13.615151526458785,
            "unit": "iter/sec",
            "range": "stddev: 0.00031056439759412043",
            "extra": "mean: 73.44758507143061 msec\nrounds: 14"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[5000]",
            "value": 2.732299498126358,
            "unit": "iter/sec",
            "range": "stddev: 0.0006812846046257943",
            "extra": "mean: 365.9920886000009 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[0]",
            "value": 1272.1797046803702,
            "unit": "iter/sec",
            "range": "stddev: 0.00007627067200871446",
            "extra": "mean: 786.0524706698146 usec\nrounds: 716"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1]",
            "value": 795.77309427425,
            "unit": "iter/sec",
            "range": "stddev: 0.00007155843864278069",
            "extra": "mean: 1.2566396215142284 msec\nrounds: 753"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1000]",
            "value": 3.5320823647021724,
            "unit": "iter/sec",
            "range": "stddev: 0.00523076211074574",
            "extra": "mean: 283.1191055999966 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[5000]",
            "value": 0.7031100014881574,
            "unit": "iter/sec",
            "range": "stddev: 0.033933994668915876",
            "extra": "mean: 1.4222525605999976 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[0]",
            "value": 1226.8947923415028,
            "unit": "iter/sec",
            "range": "stddev: 0.00017578776455874054",
            "extra": "mean: 815.065811870895 usec\nrounds: 994"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1]",
            "value": 419.2740428639715,
            "unit": "iter/sec",
            "range": "stddev: 0.0006809806154492218",
            "extra": "mean: 2.3850749098828383 msec\nrounds: 344"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1000]",
            "value": 0.8390824783865184,
            "unit": "iter/sec",
            "range": "stddev: 0.004049377244216979",
            "extra": "mean: 1.1917779547999998 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[5000]",
            "value": 0.16398808417909982,
            "unit": "iter/sec",
            "range": "stddev: 0.03163928570491998",
            "extra": "mean: 6.098004041000007 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[0]",
            "value": 1275.0687524576927,
            "unit": "iter/sec",
            "range": "stddev: 0.00019198355265691324",
            "extra": "mean: 784.271434832437 usec\nrounds: 867"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1]",
            "value": 812.3346628749398,
            "unit": "iter/sec",
            "range": "stddev: 0.00006455640661870096",
            "extra": "mean: 1.2310197332474924 msec\nrounds: 776"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1000]",
            "value": 4.322441104492332,
            "unit": "iter/sec",
            "range": "stddev: 0.0024384516282045174",
            "extra": "mean: 231.35075199999733 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[5000]",
            "value": 0.8617488893959522,
            "unit": "iter/sec",
            "range": "stddev: 0.01725607108653306",
            "extra": "mean: 1.1604308544000048 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "galt@iguaz.io",
            "name": "Gal Topper",
            "username": "gtopper"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "38646ff687af3623ad39cc50fdea01ef6c8051dd",
          "message": "Fix teardown of WriteCSV tests. (#30)\n\nCo-authored-by: Gal Topper <galt@iguazio.com>",
          "timestamp": "2020-10-26T14:04:34+02:00",
          "tree_id": "acd97a81dd1247ca451f205bd6ad4e9038b6ba1f",
          "url": "https://github.com/mlrun/storey/commit/38646ff687af3623ad39cc50fdea01ef6c8051dd"
        },
        "date": 1603714091270,
        "tool": "pytest",
        "benches": [
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[0]",
            "value": 1273.1610220579316,
            "unit": "iter/sec",
            "range": "stddev: 0.0005645589848317338",
            "extra": "mean: 785.446603119851 usec\nrounds: 577"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1]",
            "value": 867.9434108197602,
            "unit": "iter/sec",
            "range": "stddev: 0.00015717836405256983",
            "extra": "mean: 1.1521488469571008 msec\nrounds: 575"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[1000]",
            "value": 3.762352027447235,
            "unit": "iter/sec",
            "range": "stddev: 0.004988052528068146",
            "extra": "mean: 265.7911839999997 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_simple_flow_n_events[5000]",
            "value": 0.7298364528147468,
            "unit": "iter/sec",
            "range": "stddev: 0.0855656762899832",
            "extra": "mean: 1.3701699828000073 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[0]",
            "value": 5280.084767446432,
            "unit": "iter/sec",
            "range": "stddev: 0.00005672998912627222",
            "extra": "mean: 189.39089882900166 usec\nrounds: 3074"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1]",
            "value": 3542.1222667707184,
            "unit": "iter/sec",
            "range": "stddev: 0.00005768952598619723",
            "extra": "mean: 282.3166239576704 usec\nrounds: 2638"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[1000]",
            "value": 14.801580146387982,
            "unit": "iter/sec",
            "range": "stddev: 0.0034761914483809556",
            "extra": "mean: 67.5603543750043 msec\nrounds: 16"
          },
          {
            "name": "bench/bench_flow.py::test_simple_async_flow_n_events[5000]",
            "value": 3.038080763787294,
            "unit": "iter/sec",
            "range": "stddev: 0.012663683208814747",
            "extra": "mean: 329.1551732000016 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[0]",
            "value": 1286.54701778171,
            "unit": "iter/sec",
            "range": "stddev: 0.00021582619574310723",
            "extra": "mean: 777.2743523390384 usec\nrounds: 684"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1]",
            "value": 784.3379395530965,
            "unit": "iter/sec",
            "range": "stddev: 0.0003052329783233477",
            "extra": "mean: 1.2749606382292107 msec\nrounds: 926"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[1000]",
            "value": 2.9714498904778175,
            "unit": "iter/sec",
            "range": "stddev: 0.017060016187005235",
            "extra": "mean: 336.53604700000415 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_complete_flow_n_events[5000]",
            "value": 0.610074534520192,
            "unit": "iter/sec",
            "range": "stddev: 0.027094695591703535",
            "extra": "mean: 1.6391439789999993 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[0]",
            "value": 1281.3609256394234,
            "unit": "iter/sec",
            "range": "stddev: 0.00012817404074662496",
            "extra": "mean: 780.420239130502 usec\nrounds: 1104"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1]",
            "value": 415.38132758477303,
            "unit": "iter/sec",
            "range": "stddev: 0.000950591153442685",
            "extra": "mean: 2.4074264623652715 msec\nrounds: 372"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[1000]",
            "value": 0.8374591339602022,
            "unit": "iter/sec",
            "range": "stddev: 0.02162406301205539",
            "extra": "mean: 1.194088116599994 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_aggregate_by_key_n_events[5000]",
            "value": 0.17130536326853918,
            "unit": "iter/sec",
            "range": "stddev: 0.009157452804586122",
            "extra": "mean: 5.837528848599999 sec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[0]",
            "value": 1253.1871966213694,
            "unit": "iter/sec",
            "range": "stddev: 0.00030410174966296363",
            "extra": "mean: 797.9653819445572 usec\nrounds: 1008"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1]",
            "value": 805.5422266584942,
            "unit": "iter/sec",
            "range": "stddev: 0.0006548589099085962",
            "extra": "mean: 1.2413998508161947 msec\nrounds: 858"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[1000]",
            "value": 3.837910566326041,
            "unit": "iter/sec",
            "range": "stddev: 0.0026298953180306016",
            "extra": "mean: 260.5584426000007 msec\nrounds: 5"
          },
          {
            "name": "bench/bench_flow.py::test_batch_n_events[5000]",
            "value": 0.7871609693218322,
            "unit": "iter/sec",
            "range": "stddev: 0.03127714443565843",
            "extra": "mean: 1.2703881911999986 sec\nrounds: 5"
          }
        ]
      }
    ]
  }
}