---
layout: default
---

# [](#list) List of papers

  * Inference accelerators [details](#l_acc)

    1. SCNN: An Accelerator for Compressed-sparse Convolutional Neural Networks
    2. ZeNA: Zero-Aware Neural Network Accelerator
    3. Eyeriss: An Energy-Efficient Reconfigurable Accelerator for Deep Convolutional Neural Networks
    4. An Energy-Efficient Precision-Scalable ConvNet Processor in 40-nm CMOS

  * Training accelerators [details](#t_acc)
    1. CATERPILLAR: Coarse Grain Reconfigurable Architecture for Accelerating the Training of Deep Neural Networks (waiting for review)

  * Frameworks and Strategies [details](#frameworks)
    1. DeepSecure: Scalable Provably-Secure Deep Learning (waiting for review)
    2. Deep^3: Leveraging Three Levels of Parallelism for Efficient Deep Learning (waiting to be realsed on DAC 2017)
    3. Maximizing CNN Accelerator Efficiency Through Resource Partitioning (wating to be reviewed)
    4. Fast YOLO: A Fast You Only Look Once System for Real-time Embedded Object Detection in Video
    5. Efficient Processing of Deep Neural Networks: A Tutorial and Survey
    6. TVM: An Automated End-to-End Optimizing Compiler for Deep Learning
    7. Polyhedral Compilation of ML Computation Graphs (CGO 2019)
    8. Extending PlaidML to Encompass the Modern Accelerator Landscape (CGO 2019)
    9. The Sparse Tensor Algebra Compiler (CGO 2019)
    10. TensorRT - a Platform for Deep Learning Inference
    11. Compiling ML with XLA
    12. Compiling Deep Neural Networks for ACAP Devices
    13. Glow: Graph Lowering Compiler Techniques for Neural Networks

* * *

## <a id="l_acc"></a>Inference accelerator
#### 1. SCNN: An Accelerator for Compressed-sparseConvolutional Neural Network (ISCA 2017)

**Review**([Paper link](https://arxiv.org/abs/1708.04485))

A sparse CNN accelerator that encode both weights and activations.
Processing element(PE) is a multiplier  array that accepts a vector of weights and  a vector of activations.
Activations stay stationary but weights are streamed.
The partial sum accumulation is done in a separated PE because of the encoding.


#### 2. ZeNA: Zero-Aware Neural Network Accelerator

**Review**([Paper link](http://ieeexplore.ieee.org/document/8013151/))

A hardware architecture that skips zeros in a neural network.
The major problem of valina-sparsity is that parallel threads might have imbalanced
sparsity.
This hardware architecture locally broadcast to other processing units to help
balancing the workloads.
They also propose to use work stealing and dynamic allocations to balance the workloads.

#### 3. Eyeriss: An Energy-Efficient Reconfigurable Accelerator for Deep Convolutional Neural Networks

**Review**([Paper link](http://ieeexplore.ieee.org/document/7738524/))

If moving data to PE is 1x, DRAM to PE is 500x and Buffer to PE is 10x.
Data reuse is important and in Eyeriss, it is row stationary.
PE level reuse in Eyeriss is very high.
Partial sums pass in a vertically, input images pass diagonally and filter weights pass horizontally.
Data delivery is finished using an onchip network.
They claim zero skipping at run-time can reduce power by 45%.

#### 4. An Energy-Efficient Precision-Scalable ConvNet Processor in 40-nm CMOS (JSSC)

**Review**([Paper link](http://ieeexplore.ieee.org/abstract/document/7801877/))

2-D SIMD MAC arrays, supports what is called "dynamic-voltage-accuracy-scaling". This allows modulation of both computational precision and used supply voltage to vary.
A multiplier capable of modulating its precision and supply voltage makes use of a number of computational blocks. High precision activities a higher switching activities and thus longer critical path.
The hardware also guards sparsity to avoid unnecessary computations.
First, it checks a sparsity flat for memory fetch.
Second, it clock gates the accumulation register to prevent redundant MACs.

***

## <a id="t_acc"></a>Training accelerator
#### 1. **CATERPILLAR: Coarse Grain Reconfigurable Architecture for Accelerating the Training of Deep Neural Networks**

 **Review**([Paper link](https://arxiv.org/abs/1706.00517))

***

## <a id="frameworks"></a>Frameworks and Strategies
#### 1. **DeepSecure: Scalable Provably-Secure Deep Learning**

 **Review**([Paper link](https://arxiv.org/pdf/1705.08963.pdf))

#### 2. **Deep^3: Leveraging Three Levels of Parallelism for Efficient Deep Learning**


#### 3. **Maximizing CNN Accelerator Efficiency Through Resource Partitioning**
**Review**([Paper link](https://arxiv.org/pdf/1607.00064))

#### 4. **Fast YOLO: A Fast You Only Look Once System for Real-time Embedded Object Detection in Video**
**Review**([Paper link]())
Yolo is a framework that uses darknets to perform real time object recognition.
The Fast Yolo system is built on Yolo and try to avoid redundant calculations
with the streamed inputs.
It performs an action that it called "motion-adaptive inference".
For each video frame, an image stack consisting of the video frame with a reference frame is passed into a 1 × 1 convolutional layer.
The result of the convolutional layer is a motion probability map, which is then fed into a motion-adaptive inference module to determine if deep inference is needed to compute an updated class probability map.

#### 5. Efficient Processing of Deep Neural Networks: A Tutorial and Survey

**Review**([Paper link](https://arxiv.org/pdf/1607.00064)))
* CPU/GPU: computational transform on kernals to reduce the number of MACs
  1. Fully connected layers: batching
  2. Convolutional layers:
    * Toeplitz matrix(add redundant data),
    * FFT transform,
    * Strassen or Winograd (Reduced numerical stability, increased storage requirement,
      specialized processing)
* Accelerators:
  1. Optimized dataflow, fits everying on-chip, not possible for large models
  2. Reuse
    * Weights stationary: parallel activations fetch and streaming of partial sums
    * Output stationary: parallel weights fetching and streaming of activations
    * No local reuse: no register files on each PEs

#### 6. TVM: An Automated End-to-End Optimizing Compiler for Deep Learning (CGO 2019)

**Review**([Paper link](https://drive.google.com/file/d/1xx8Fj3q71MnFKz1XXG-tdiSUlrAoucru/view)))
This talk on CGO focuses on fusing operations in the TVM framework.
Optimizaiton chances including loop transform, thread binding, cache locality, etc.
They suggest that using cost-model to find effective transformation or statistical modelling are too slow and thus use GRU to extract loop context and build embeddings.
In that case, the embedding can be hardware-irrelevant.

#### 7. Polyhedral Compilation of ML Computation Graphs (CGO 2019)

**Review**([Paper link](https://drive.google.com/file/d/1lVuENaC8cBoXn7xF-e-mXFtQh5okcy4U/view)
They add info to the DAG to contain: data access maps, iteration and data spaces and a dependency map.
These additional information then allows polyhedral IR to perform polyhedral transforms.

#### 8. Extending PlaidML to Encompass the Modern Accelerator Landscape (CGO 2019)

**Review**
Another IR ported from Intel.
It visualize data as an arbitrary size tensor where the user defines the finest operation block sizes for the targeting hardware.
Nothing really exciting...
Basically an IR that supports arbitrary granularity control on the data.

#### 9. The Sparse Tensor Algebra Compiler (CGO 2019)

**Review**([Paper link](https://drive.google.com/open?id=1-GeM9UkP23J-l0v0C4o-Z1iw-lDw0PDG))
Use various compressed formats (hashed, CSR ...)
and classifies them into 1. whether read access is random. 2. whether it is iterative access.
TACO now supports a wide range of data formats and efficient computations between these formats.

#### 10. TensorRT - a Platform for Deep Learning Inference

**Review**([Paper link](https://drive.google.com/file/d/1BJQTlcj40JXVIZa5byMtFab8lls3odyw/view))
TensorRT has a graph transformation to put the original graph into an 8-bit version with scheduled memory, and of course, fused operations.
The Auto-tuning is nothing more than latency hiding, where it tries to overlap uncorrelated computations.

#### 11. Compiling ML with XLA

**Review**([Paper link](https://drive.google.com/file/d/1AfNoznbCIejQLErblXF7CV_Wk4cJypuC/view))
XLA supports graph fusion, but it seems like its fusion is more low-level, it considers memory reuse in a chained computation like conv-bn-relu.
They point out that the heuristics used to decide how to fuse greatly affect performance and compiling general fusing ops is very tricky.
BatchNorm becomes an interesting candidate and fusing can cause bartnorm to be fused with different surrounding ops.
An interesting mention is that they said it is hard to max the compute of TPUs...

#### 12. Compiling Deep Neural Networks for ACAP Devices

**Review**([Paper link](https://drive.google.com/open?id=1Pxn27H9JyFynkhUBBmcbpLNyBVdtE-kM)
XDNN accelerator has a layerwise execution strategy, and FiNN is a streaming structure.
They then have a new AI core in 7nm, connected by a NoC.

#### 13. Glow: Graph Lowering Compiler Techniques for Neural Networks

**Review**([Paper link](https://drive.google.com/file/d/1-Nczf_gXOvtjYL3ooyRFu205ivswBHAk/view))
They explicitly introduce another level of optimization called lower-level, mainly for memory scheduling operations.
They support static memory allocation, graph partitioning, etc.
