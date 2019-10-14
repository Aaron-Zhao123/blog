## Binary Parallelisation

#### Binary translation
* Static: possible to have static one with partial runtime capabilities
* Dynamic

source code -> compiler -> rewrite schedule -> dynamic binary tranlation -> Binary profiling infomation -> compiler

* Each thread can have its own private code base.
* Perform  a runtime check on induction variables
* Stripped binaries are much more difficult to analyse (O3 pass)
