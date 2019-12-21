---
layout: default
---

# [](#list) List of papers

  * Training Architectures [details](#train)

  * Inference Architectures [details](#inference)
    1. Can FPGAs Beat GPUs in Accelerating Next-Generation Deep Neural Networks? (waiting review)
    2. Accelerating Binarized Convolutional Neural Networks with Software-Programmable FPGAs
    3. Optimizing Quantized Neural Networks on FPGAs
    4. A framework for generating high throughput CNN implementations on FPGAs

* * *

## <a id="train"></a>Inference Architecture
#### 1. Can FPGAs Beat GPUs in Accelerating Next-Generation Deep Neural Networks
 **Review**([Paper link](http://jaewoong.org/pubs/fpga17-next-generation-dnns.pdf))

#### 2. Accelerating Binarized Convolutional Neural Networks with Software-Programmable FPGAs

 **Review**([Paper link](http://www.csl.cornell.edu/~zhiruz/pdfs/bnn-fpga2017.pdf))
 Three major components. 1. Data, weights buffer, 2.  compute units, 3. DMA system
 to fetch off-chip parameters.
 The use variable width line buffer (VWLB) to overcome input data at different
 bit-widths, a new input therefore can be buffered for every clock cycle.
 FC only perform a parallel read of inputs and weights and vector-wise parallel
 multiplications.

#### Optimizing Quantized Neural Networks on FPGAs
**Review**([Paper Link](http://www.isfpga.org/slides/w2.pdf))
Complexity analysis:
conv = o(N * M * K * K * OutW * OutH)
pool = o(N * OutW * OutH)
conv_mem = o(N * M * K * K)
Useful demo code on tiling and unrolling
