## Customizing the System Stack for Data Processing
#### Jana Giceva, Imperial College London

## Trends
* Increasing size and complexity in data centers
* Heterogeneous resources
* Diversity among machines
* Data intensive, predictable performace
* Virtualization

## Solutions
Link database to operating systems
* Part 1: optimizer, storage engine and execution engine (Database).
Policy Engine, resource profilier (OS).
* Part 2: Customize OS

## Part 1
#### Policy Engine
An engine that stores devices info and hardware info.
This includes system info (#cpus, cache size, interconnects and etc) and
application specific info (application pushes information from an interface).
Specific info can include #requests, database size and etc.
A **cost model** can be pushed into this specific info engine.
