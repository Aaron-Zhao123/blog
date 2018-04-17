---
layout: default
---

## Chip Multiprocessors

#### Flynn’s Taxonomy
* SISD: uniprocessor
* SIMD: GPUs
* MIMD: Each processor runs on its own data
* MISD: not intersting

#### Communication Models
* Shared memory
* Message passing


#### Cache Coherence
* Invalidate or update: invalidation generates less traffic.
###### Write-through Invalidation
Each write causes a write transaction on the bus (write through cache), the snooping cache checks if it has a copy associated with the write address. If the cache block exists, we invalidate it. This simple snooping protocol and write-through caches require additional memory bandwidth.

#### Consistency
* Sequential consistency:
Each individual processor execute in program order.
Many optimizations violate this (write buffers, cache).
This requires us to wait for the previous write to complete and propagating changes must be an atomic operation.

* Relaxed consistency:
Reordering memory operations between synchronization operations does not typically affect correctness.

* False sharing:
The cache coherence mechanism may cause a block to be invalidated if unrelated words are stored in the same cache line.

#### Shared and private caches
L2 cache can whether be private or shared.
Private L2 caches have low hit latency but low capacity, it works well if workload fits in local L2.
If we use **exclusion policy**, blocks in L1 or L2, this means independent snooping hardware for each level of cache.
**Inclusion policy** means that if block is in L1, it is also in L2, and snooping the bus on L2 is sufficient.


#### MSI write-back invalidate protocol
Write-through caches broadcast all writes over the bus, this
requires additional memory bandwidth. Write-back caches are more popular.

Cache line -> valid or invliad, if invalid, clean or dirty. The protocol
is called modified, shared and invlid. (MSI).

Modified: If another cache needs the block, flush to main memory. IF we hold
the rquested block and recieve a busrd, we must go to invalid

Shared: processor write or bus read goes to modified

Invalid: A write will bring to modified.


#### MESI protocol
If we read a block and subsequently wish to modify it, this normally
requires two bus transactions using MSI.
If we have the only copy of the block, transaction from S to M is unnecessary.
This brings the Exclusive state.


#### Update protocols
On a write we can update the cache copies with the new data.
This is low latency and fewer transactions, we only need to keep each sharer
up to date. There is unnecessary traffic when a single processor writes
repeatedly to one block.


#### Directory based cache coherence
Snoopy protocol works by broadcastting memory operations on the bus.
Alternatively, we can store state of each block as directory.
Requests are made to each directory entry to read or write a particular block.
The directory keeps track of which cache has a copy and their states.
Boardcast is replaced by point-to-point communication and the protocol works
better over scalable interconnects.

#### Synchronization
* Test and Set: lock down the bus for these two cycles to ensure atomicity.
* Invalidation based with WB cache: read exclusive and then read and write, any
incoming requests to the block has to be buffered.
* load linked and store conditional. set a lock flag for load and store.
