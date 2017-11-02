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
