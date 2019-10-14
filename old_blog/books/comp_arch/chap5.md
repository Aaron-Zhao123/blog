---
layout: default
---
## Vector Processors
Vector-register processors: lower memory bandwidth and easier to check
dependencies.

#### Components
**vector registers**: each register holds a fixed number of elements and
the vector register files has lots of ports so different vector operations
can be performed in parallel.

**vector functional units**: fully pipelined, new element per clock cycle.

**vector load store units**: data moved between register and memory

**scalar registers**: provide data as input to vector functional units

* Partition vector register files and functional units into multiple lanes.

#### Advantages
* Data-level parallelism
* Reduce energy per operation: less switching in datapath, reduction in number
of instructions, regular access pattern.


#### Practical designs:
* memory system: start-up time of a vector load is the time to get the first
word from memory to register. The initiation rate should be capable of providing
data at this rate.
* Vector length and stride: (small) vector-length register (VLR) to control the
length of vector operations.  (long) stripe-mine.
* chaining and taligating: element-wise dependencies instead vector dependency.
* conditional execution: handel ifs
* sparsity: indirect access, load and store vector indexed instructions (gather and scatter)
