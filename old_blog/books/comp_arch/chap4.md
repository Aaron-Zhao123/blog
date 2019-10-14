---
layout: default
---
## Memory Hierarchy
#### Separate and unified caches
* Separate caches allow pipelined processor to access instruction and data memory
at the same clock cycle
* Unified caches can dynamically adjust portions of data and instruction caches

#### Block size
Divide cache into blocks to exploit spatial locality. On a cache miss,
a minimum load is one block of data, this is known as **miss penalty**.
* Small block size: smaller miss penalty but higher miss rate
* Large block size: larger miss penalty but smaller miss rate

* Direct mapped cache:
Each block has only one place to be stored in cache. Fast, simple but suffers
from conflict misses.

* Set associate cache:
n-way set associate means each set has n entries.

* Fully associate cache:
Very inefficient, need to check every entry for a miss.

* CAM-tag
Minimize hit energy but around 10\% area overhead.

#### Cache misses
* Compulsory
First time entering the cache
* Capacity
Number of blocks exceeds the the capacity of the cache
* Conflict
Many blocks mapped to the same set, fully associative cache does not suffer from this.


## Optimizations
#### Write buffers
* Write buffer is parallel to the cache system, it hides the lower throughput of
the memory system
* Repeated writes can happen in the write buffer without flushing back to the
main memory
* On a cache read miss, we must check the write buffer does not contain the
data, otherwise you have to flush back the buffer.

#### Multi-level caches
* Reduces miss penalty
* L1: fasted and smallest
* L2, L3; minimize off-chip accesses' latency. Typically large with
associativities.

#### Inclusion
Block sizes might be different for L1 and L2.
On a cache miss, data may be replaced in L2 but remains in L1, which violates
the inclusion property.

#### Critical word first
Allow the processor to execute on the arrival of the first required word.
The rest of the words keep filling up the block.

#### Victim cache
The victim cache (fully-associative) holds lines displaced from L1.
The processor checks both and swap data if VC hist but L1 misses.
This should remove many conflict misses.
This is different from a victim buffer, victim buffer only has **dirty blocks**.

#### Prefetching
* Software prefetching: prefetch early enough so the data is in cache when
* Hardware prefetching: prefetch on misses, one-block look ahead. The tagged
sequential prefetcher adds a tag bit and is set when a block is prefetched.
If the bit is set and a cache hit occurs, the next cacheline is also prefetched.
