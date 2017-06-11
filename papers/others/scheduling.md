---
layout: default
---


# [](#list) List of papers
  * Optics [details](#inference)
  * Swtiches and Routers [details](#inference)
    1. Scaling Internet Routers using Optics (waiting review)
    2. Load Balanced Birkhoff-von Neumann Swtiches: one-stage buffering (waiting review)

* * *
## <a id="train"></a>Switches
1. **Scaling Internet Routers using Optics**
> **Review**([Paper link](http://dl.acm.org/citation.cfm?id=863978))
> > The need of larger capacity of router is more than the need of faster routers.
> > Two classes of systems: multi-rack system and single-stage switches.
> > 1. Multi-rack system uses distributed switches, but suffers from unpredictable performance and poor scalability.
> > 2. Single-stage system (crossbar with input output queueing) uses scheduling
algorithms such as iSLP and WFA. Centralized schedulers don’t scale with an increase in the number of ports, or with an increase in the line-rate.
> >
> > load-balancing -> fixed, equal-rate input switch -> N*N VOQs -> fixed, equal-rate output switch.
> > It achieves 100% throughput without using a centralized swtich

2. **Load balanced Birkhoff-von Neumann switches**
> **Review**([Paper link](http://ieeexplore.ieee.org/document/923646/))
