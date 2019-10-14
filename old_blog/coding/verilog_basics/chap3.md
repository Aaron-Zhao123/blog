---
layout: default
---
# Chapter 3: FIFOs
## Synchronous FIFOs
There are two ways of writing a synchronous FIFO:
1. Use a counter for the number of elements. The disadvantage is obvious, you need an extra counter and this affects area and speed.
2. Use one more bit on both write and reader cnt.

```Verilog
module syn_fifo(
  data_in,
  data_out,
  clk,
  rst,
  rd,
  wr,
  full,
  empty
  );
  parameter DATA_WIDTH = 8;
  parameter ADDR_WIDTH = 8;
  parameter RAM_DEPTH = (1 << ADDR_WIDTH);

  input [DATA_WIDTH-1:0] data_in;
  input clk, rst, rd, wr;

  output [DATA_WIDTH-1:0] data_out;
  output full, empty;

  reg [ADDR_WIDTH-1:0] wr_pointer, rd_pointer;
  reg [ADDR_WIDTH-1:0] status_cnt;
  reg [DATA_WIDTH-1:0] data_out;

  wire [DATA_WIDTH-1:0] data_ram;

  assign full = (status_cnt == (RAM_DEPTH-1));
  assign empty = (status_cnt == 0);

  always @ (posedge clk or posedge rst)
  begin: WRITE_POITER
    if (rst) begin
      wr_pointer <= 0;
    end
    else begin
      if (wr_en) begin
        wr_pointer <= wr_pointer + 1;
      end
    end
  end

  always @ (posedge clk or posedge rst)
  begin: READ_POINTER
    if (rst) begin
       rd_pointer <= 0;
    end
    else begin
      if (rd_en) begin
        rd_pointer <= rd_pointer + 1;
      end
    end
  end

  // method 1
  always @ (posedge clk or posedge rst)
  begin: STATUS_COUNTER
    if (rst) begin
    end
    else begin
      if (rd_en && !wr_en && status_cnt != 0) begin
        status_cnt <= status_cnt - 1;
      end
      if (wr_en && !rd_en && status_cnt != RAM_DEPTH) begin
        status_cnt <= status_cnt + 1;
      end
    end
  end

  ram_dp_ar_aw #(DATA_WIDTH, ADDR_WIDTH)DP_RAM(
    .address_0(wr_pointer),
    .data_0(data_in),
    .cs_0(1'b1),
    .we_0(wr_en),
    .oe_0(1'b0),
    .address_1(rd_pointer),
    .data_1(data_ram),
    .cs_1(1'b1),
    .we_1(1'b0),
    .oe_1(rd_en)
    );

endmodule
```

```Verilog
module syn_fifo(
  data_in,
  data_out,
  clk,
  rst,
  rd,
  wr,
  full,
  empty
  );
  parameter DATA_WIDTH = 8;
  parameter ADDR_WIDTH = 8;
  parameter RAM_DEPTH = (1 << ADDR_WIDTH);

  input [DATA_WIDTH-1:0] data_in;
  input clk, rst, rd, wr;

  output [DATA_WIDTH-1:0] data_out;
  output full, empty;

  reg [ADDR_WIDTH:0] wr_pointer, rd_pointer;
  reg [DATA_WIDTH-1:0] data_out;

  wire [DATA_WIDTH-1:0] data_ram;
  wire matched;

  assign matched = (wr_pointer[ADDR_WIDTH-1:0] == rd_pointer[ADDR_WIDTH-1:0]);

  assign full = matched && (wr_pointer ^ rd_pointer);
  assign empty = matched && (wr_pointer == rd_pointer);
   ....
```

## Asynchronous FIFOs
Asynchronous FIFO has two clock sources:
1. Cross clock domain signal passing: this might causes **metastability** (signal that do not assume a stable 0 or 1, potentially because of sampling from the edge of a signal).
2. **two flip flop synchroniser** solves metastability.
3. Gray code counter allows one bit to change at a time, minimizing the number of glitches.

```Verilog
module async_FIFO(
  W_clk,
  data_in,
  w_enable,
  R_clk,
  data_out,
  r_enable,
  async_reset,
  full,
  empty
  );
parameter DATA_WIDTH = 8;
parameter ADDR_WIDTH = 4;
parameter MEM_DEPTH = (1<<ADDR_WIDTH);

input W_clk, R_clk, async_reset;
input [DATA_WIDTH-1:0] data_in;
input w_enable, r_enable;

output reg [DATA_WIDTH-1:0] data_out;
output reg full, empty;

reg [DATA_WIDTH-1:0] MEM[MEM_DEPTH-1:0];
reg [ADDR_WIDTH-1:0] pNextWordToRead, pNextWordToWrite;
reg [ADDR_WIDTH-1:0] read_count, write_count;

wire going_full, going_empty;
reg preset_full, preset_empty;

// dual port memory
always @ ( posedge R_clk ) begin
  if ( r_enable && !empty)
    data_out <= MEM[pNextWordToRead];
end

always @ (posedge W_clk) begin
  if (w_enable && !full)
    MEM[pNextWordToWrite] <= data_in;
end

initial begin
  pNextWordToWrite <= 4'b0;
  write_count <= 1;
  pNextWordToRead <= 4'b0;
  read_count <= 1;
end

// construct read write pointers
always @(posedge R_clk) begin
  if (async_reset) begin
    pNextWordToRead <= 4'b0;
    read_count <= 1;
  end
  else begin
    if (r_enable && !empty) begin
      read_count <= read_count + 1;
      pNextWordToRead <= {read_count[ADDR_WIDTH-1],
                          read_count[ADDR_WIDTH-2:0] ^ read_count[ADDR_WIDTH-1:1]};
    end
  end
end


// gray code counter
always @(posedge W_clk) begin
  if (async_reset) begin
    pNextWordToWrite <= 4'b0;
    pNextWordToRead <= 4'b0;
    write_count <= 1;
    read_count <= 1;
  end
  else begin
    if (w_enable && !full) begin
      write_count <= write_count + 1;
      pNextWordToWrite <= {write_count[ADDR_WIDTH-1],
                          write_count[ADDR_WIDTH-2:0] ^ write_count[ADDR_WIDTH-1:1]};
    end
    if (r_enable && !empty) begin
      read_count <= read_count + 1;
      pNextWordToRead <= {read_count[ADDR_WIDTH-1],
                          read_count[ADDR_WIDTH-2:0] ^ read_count[ADDR_WIDTH-1:1]};
    end
  end
end

// construct full empty logic
assign going_empty = (pNextWordToWrite[ADDR_WIDTH-2] ~^ pNextWordToRead[ADDR_WIDTH-1]) &
                     (pNextWordToWrite[ADDR_WIDTH-1] ^  pNextWordToRead[ADDR_WIDTH-2]);

assign going_full = (pNextWordToWrite[ADDR_WIDTH-2] ^  pNextWordToRead[ADDR_WIDTH-1]) &
                     (pNextWordToWrite[ADDR_WIDTH-1] ~^ pNextWordToRead[ADDR_WIDTH-2]);

 // a pre full/empty signal
always @ (*) begin
  if (pNextWordToRead == pNextWordToWrite) begin
    if (going_full == 1) begin
      preset_full <= 1;
    end
    if (going_empty == 1) begin
      preset_empty <= 1;
    end
  end
end

// set full and empty under different clock
initial begin
  full <= 0;
  empty <= 0;
end
always @ (posedge W_clk or posedge preset_full) begin
  if (preset_full == 1) begin
    full <= 1;
  end
  else begin
    full <= 0;
  end
end

always @ (posedge R_clk or posedge preset_empty) begin
  if (preset_empty == 1) begin
    empty <= 1;
  end
  else begin
    empty <= 0;
  end
end

endmodule
```
