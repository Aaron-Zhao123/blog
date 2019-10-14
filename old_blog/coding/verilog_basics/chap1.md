---
layout: default
---
# Chapter 1: Finite State Machines
FSMs are normally broken down into two parts: the first part is transactional logic and the second part is state-dependent logic.
A combinational logic is in charge of both computing the next state and output signal depending on the current state.
In Verilog, this is a achieved using **two always blocks**, one clocked always block to compute the next state and one without a clock to compute the output.


The FSM states are **one-hot coded**, more state registers, for N states, we have N flip flops.
However, the state transitions are a lot easier because no logic is required to decode.

Blocking and non-blocking assignments.
Use blocking assignments in **always_ff** and non-blocking assignmetns in **always**.

Using **enum** to define states' encoding.
```Verilog
module FSM(
  clk,
  async_reset,
  enable,
  s_in,
  s_out
  );
  input wire clk, async_reset, enable;
  input wire s_in;
  output wire s_out;
  reg s_out;
  reg [3:0] state;
  // if using enum
  typedef enum {IDLE=4'b0001, STATE1 = 4'b0010, STATE2 = 4'b0100, END = 4'b1000} States;
  // if using parameter keyword
  parameter IDLE = 2'b00, READ = 2'b01, DLY  = 2'b11, DONE = 2'b10;

  always @ (posedge clk or posedge async_reset) begin
    if (async_reset) begin
      state <= 4'b0001;
    end
    else begin
      if (enable) begin
        if (state == 4'b0001 && s_in == 1'b1) begin
          state <= 4'b0010;
        end
        if (state == 4'b0010 && s_in == 1'b0) begin
          state <= 4'b0001;
        end
        if (state == 4'b0010 && s_in == 1'b1) begin
          state <= 4'b1000;
        end
        if (state == 4'b1000 && s_in == 1'b0) begin
          state <= 4'b0100;
        end
        if (state == 4'b0100 && s_in == 1'b0) begin
          state <= 4'b0001;
        end
        if (state == 4'b0010 && s_in == 1'b1) begin
          state <= 4'b1000;
        end
      end
    end
  end

  always @ (*) begin
    case (state)
      2'b00: s_out = 0;
      2'b01: s_out = 0;
      2'b11: s_out = 1;
      2'b10: s_out = 1;
    endcase
  end

endmodule
```
