## Key-value Store for In-network Computing
Speaker: Yuta Tokusashi, Keio Univerisity

#### In memory database
IMDB: a database that primarily relies on main memory for computing. IMDB is faster than disk-optimized databases.

#### KVS accelerations
Hardware acceleration: limited cache but large performance improvements.
Multilevel cache in network: L1, L2 caches are in NIC, Main memory maintained by software protocols (sending packets).

#### Layered Key-value Store
L1 cache (NIC, NetFPGA-SUME) -> L2 cache in kernel -> Main memory
FPGA has hashing units, the hash keys are stored in DRAM and the pointed data is stored in SRAM.
