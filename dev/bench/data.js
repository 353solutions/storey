window.BENCHMARK_DATA = {
  "lastUpdate": 1603023136683,
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
      }
    ]
  }
}