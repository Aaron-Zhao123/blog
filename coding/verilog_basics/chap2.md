---
layout: default
---
# Chapter 2: Logics and Timing

## Basics
1. **Propagation delay**:
Definition: Time between a cause and its effect. (normally from clk to data)
Propagation delays between clock edges to data accumulate, this may restrict the clock frequency.
2. **Logic Elements**:
Logic elements are basic blocks in FPGAs, each logic element has a lookup table and a register. The lookup table has whether 6 input ports or 4 input ports. The register is a flip flop with a clock and reset signal.
A common question is what is the size of a multiplexer for a 6-input LUT? A six input LUT normally has 2 select inputs and 4 data inputs, and thus it is a 2-bit multiplexer.
3. **Setup/Hold slack**: time of data + setup slack + setup time; setup slack is the amount of safe margin, a negative slack means the circuit might not work reliably.
4. **Clock Skew**: The clock signal arrives to different components at different time, because of circuitry length difference. Can be avoided using clock distribution tree, but sometimes clock skew helps to relax setup and hold time constraints.
5. **Clock Jitter**: The amount of derivation of the clock from the expected value, Minimise clock distribution path, normally a tree structure.
6. **PLL**: feedback circuit designed to allow synchronisation of a phase using feedback loops, usually change counter values to vary clock frequency value. Phase detector -> LPF -> Voltage controlled oscillator ->DIV in negative feedback loop. It creates a signal free of amplitude and phase variation.
7. **DLL**: Delay locked loop, cannot perform frequency multiplication but easier and more robust. Phase detector -> LPF -> Delay line -> feedback loop. Normally use voltage controlled delay lines. It is more suitable for high-speed communication.
8. Timing and critical path optimizations:
  1. Replicating source logic to reduce high fanout net delay. Fanout is the number of logic gates connected to the output of the driving gates. Large fanout increases the capacitive load at the output and therefore longer propagation delay time. 
  2. Reduce logic levels, may be mudticycle path
  3. Pipeline the logic levels
  4. Place the IO pins, group them so they are closer to the logic

## Gray Code Counter
Gray code only allows one bit to change at a time, such an approach **minimises the chance of getting glitches**
* Gray code to Radix-2: nth radix2 = (n+1)th radix2 + nth gray
* Radix-2 to Gray code: q[3], q[3]^q[2], q[2]^q[1], q[1]^q[0]

```Verilog
module gray_code_counter(
  clk,
  async_reset,
  enable,
  count
  );

  input clk, async_reset, enable;
  output [1:0] count;

  reg [1:0] count, tmp;

  initial begin
    count <= 2'b0;
    tmp <= 2'b0;
  end

  always @ (posedge clk or posedge async_reset) begin
    if (async_reset == 1) begin
      count <= 2'b0;
    end
    else begin
      if (enable == 1) begin
        count <= tmp;
      end
    end
  end

  always @ (*) begin
    case (count)
      2'b00: tmp = 2'b01;
      2'b01: tmp = 2'b11;
      2'b11: tmp = 2'b10;
      2'b10: tmp = 2'b00;
      default: tmp = 2'b00;
    endcase
  end
endmodule
```

```Verilog
module gray_code_counter_tb();
  reg clk, async_reset, enable;
  wire[1:0] res;

  gray_code_counter count(
    clk,
    async_reset,
    enable,
    res
    );

  initial begin
    $dumpfile("graycounter.vcd");
    $dumpvars;
    async_reset = 1;
    clk = 0;
    enable = 1;
    while (1) begin
      #5 clk = ~ clk;
    end
  end

  always @ (negedge clk) begin
    async_reset <= 0;
  end

  initial
   #100 $finish;

endmodule
```
