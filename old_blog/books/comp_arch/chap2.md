---
layout: default
---
## Classifying architectures
#### Number of memory addresses
1. 0-3, register-register, memory can only be accessed with load and store instructions
2. 1-2, register-memory
3. 2, memory-memory

#### Encoding an instruction set
The representation of an instruction set affect not only the size of compiled program but the implementation of the processor.
In fact, it might affect the compiler design as well.
Two deciding factors for the encoding of an instruction set:
1. Addressing modes
2. Number of registers

#### Register Windows
They are used to prevent spilling registers to memory.
Sometimes we need context switching and complicates multithreading designs.
