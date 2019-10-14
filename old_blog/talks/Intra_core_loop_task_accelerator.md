##  Intra-Core Loop-task Accelerators for Task Based Parallel Programs
Speaker: Chris Batten

#### Task level programming
* Inter-Core Task-based parallelism: TBB, Cilk
* Run-time load balancing on cores
* Intra-Core parallelism: SIMD units (AVX)

#### Challenges
1. Intra-core Parallel Abstraction Gap, hard to balance between TBB and AVX
2. Inefficient Execution of irregular tasks

#### Loop-Task Accelerator
* Adding a lightweight hint to the ISA for the hardware to know the efficient execution pattern.
* Software Side:
  - Take a special instruction.
  - Work Stealing from task queues, stealing occurs recursively.
* Hardware Side:
  - Hardware spread tasks into micro-threads, this fine-grained sharing is not possible in software.
  - Fully coupled: everything is locked, stall and divergence affects other threads. (Temporal decoupling)
  - Fully decoupled: added fetch units and arbitration. Much better for irregular workloads, because of the decoupled execution. This has added extra hardware and possible contentions. (Space decoupling)
  - Adding spacial decoupling means paying extra area and energ overheads.
