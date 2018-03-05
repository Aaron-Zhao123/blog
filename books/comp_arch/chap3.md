---
layout: default
---
## Instruction-level Parallelism
#### Dependencies
1. Name dependency:
antidependency and output dependency.
Name dependency is not a true dependency.
**register renaming** can resolve this.

2. Data dependency:
  Executing dependent data simultaneously would cause a processor with
  pipeline interlocks to detect a hazard and stall.
  In a processor without interlocks, the compiler cannot schedule dependent instructions
  with complete overlaps.
  The presence of the dependence indicates a potential of hazard.
  The actual hazard and length of any stall depends on the pipeline.
  Data flow occurs at registers is easy to analyze for dependency, but data
  flow occurs in memories is a lot harder to detect.

3. Control dependency
  Programs must reserve the program order.
  Control dependency itself is not a performance limit.


#### Hazards
1. Data Hazard
2. Structural hazards:
arise from resource conflict
3. Control hazards:
are caused by instructions that change the PC


## Expoliting ILP
* To keep a pipeline full, parallelism among instructions must be exploited
by finding sequences of unrelated instructions that can be **overlapped**.
* To avoid stall, the execution of dependent instructions must be separated.

#### Basic compiler techniques
1. Determine unrolling of the loop.
2. Use different registers to avoid name dependencies.
3. Determine the loads and stores in the unrolled loop can be interchanged,
this requires analyzing the memory addresses. This sometimes reduces the stalls!
5. Schedule the code to preserve dependencies.

Potential limits:
1. Decrease in the amount of overhead amortized with each unroll.
2. Code size, might cause instruction cache misses. Too many unrolling also causes
**register pressure**.
3. Compiler limitations

#### Branch Prediction
**Static branch prediction** is optimized by compilers normally

Tournament Predictors: adaptively combine local and global predictors.
* Local predictor has a two level predictor. Branch history table + Prediction history table.
* an (m,n) predictor uses the behavior of the last m branches to choose from 2^m branches

#### Dynamic Scheduling
In-order instruction issue and execution can cause stall of a pipeline.
If there's a dependency between two closely spaced instructions, this will
lead to hazard.
If in a supersclar core (multiple functional units), these units will lie idle.


# Out-of-order Execution
Split the pipeline stage:
1. Issue: Decode instructions, check for structural hazards.
2. Read Operand: wait until no data hazards, then read operands.
3. Maintain a buffer of instruction waiting to execute.

Potential Problems:
1. Introduce WAR and WAW hazards.
2. Hard to handle exceptions. Imprecise exceptions makes reissuing the instruction harder

# VLIW
VLIW processors pack multiple independent operations into one very long instruction.

1. Potential for simpler hardware
2. Assume compiler has nicely scheduled the instructions, very complex compilers
3. Simply stall pipeline if operations cannot finish
4. Pack the very-long instructions with no-ops if cannot find full set of independent instructions

Now mainly exists in DSPs
1. Low power, simpler hardware
2. focous on tight loop orientated kernels
3. Predictable performance

* Software speculation -> Load address table
* Software pipelining -> rotating register file
