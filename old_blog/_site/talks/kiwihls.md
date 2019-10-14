## Kiwi HLS

#### Functional Units
HLS tool makes structural instantiation of major FUs:
- ALU, integer F/P
- RAM
- HeampManager

The synthesized design have a control **FSM**, logic units, and folding/unfolding depend on Time/Spec requirements.

#### Basic Block Scheduling
Blocks can run concurrently, reads/writes conflicts should be resolved. The running is massively parallel.

#### FPGA technology
Programmable wiring is
- Longer
- implemented using pass transistor logic
- Resistance is higher

#### Kiwi Toolchain
dotnet bytecode -> kiwi Compiler -> FPGA compiler
