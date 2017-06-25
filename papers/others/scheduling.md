---
layout: default
---


# [](#list) List of papers
  * Optics [details](#inference)
  * Swtiches and Routers [details](#inference)
    1. Scaling Internet Routers using Optics (waiting review)
    2. Load Balanced Birkhoff-von Neumann Swtiches: one-stage buffering (waiting review)
    3. Maintaining Packet Order in Two-Stage Switches

* * *
## <a id="train"></a>Switches
1. **Scaling Internet Routers using Optics**
> **Review**([Paper link](http://dl.acm.org/citation.cfm?id=863978))
> > 1.	The capacity of router must grow but growth in router speed seems less important.
> > 2.	Two problems on multi-rack systems: unpredictable performance and poor scalability.
> > 3.	The architecture: Load balancing -> N*N VOQs -> switch; both switches are equal-rates and serve in a deterministic manner.
> > 4.	If output nodes also serve as intermediate nodes, the same setup is achieved using only one fixed switch with a loss of 50% in throughputs.
> > 5.	In TCP, packets arriving to the destination with wrong order triggers retransmissions.
> > 6.	 Fully ordered frames first (FOFF)

2. **Load balanced Birkhoff-von Neumann switches**
> **Review**([Paper link](http://ieeexplore.ieee.org/document/923646/))
> > 1. The main drawback is that FIFO might be violated for packets from the same input.
> > Two classes of systems: multi-rack system and single-stage switches.
> > 2. The complexity for the switch is O(N).
> > 3.	Load balancing works by making incoming packets of different queues become evenly distributed on the output side. The evenly distributed queues are then be served concurrently on the second-stage buffer.

3. Maintaining Packet Order in Two-Stage Switches
> **Review**([Paper link](http://yuba.stanford.edu/~nickm/papers/Infocom02_two_stage.pdf))
> > 1.	The scalability of most input-queued switches is limited by the scheduling algorithm.
> > 2.	Two stage switching – load balancing spreads data traffic uniformly for the next stage. Is it possible to find a more efficient spreading algorithm?
> > 3.	EDF (Earlier deadline first) algorithm prevents miss-sequencing by serving cells in VOQs in the order that they arrived to the switch.
> > 4.	3DQ, the use of 3-dimensional virtual queueing to avoid HOL.
> > 5.	FFF (Full Frames First): algorithms deal with frames rather than packets. The priority of serving frames is higher than serving packets. Only there are no full frames requiring services, it serves non-full frames in round-robin fashion.
