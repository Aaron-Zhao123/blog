---
layout: default
---

# [](#list) List of papers
  * Inference accelerators [details](#l_acc)
    1. SCNN: An Accelerator for Compressed-sparseConvolutional Neural Networks (waiting for review)
    2. ZeNA: Zero-Aware Neural Network Accelerator



  * Training accelerators [details](#t_acc)
    1. CATERPILLAR: Coarse Grain Reconfigurable Architecture for Accelerating the Training of Deep Neural Networks (waiting for review)

  * Accelerators in the cloud [details](#cloud)
    1. Learning both Weights and Connections for EfficientNeural Networks

  * Frameworks and Mapping strategies [details](#frameworks)
    1. DeepSecure: Scalable Provably-Secure Deep Learning (waiting for review)
    2. Deep^3: Leveraging Three Levels of Parallelism for Efficient Deep Learning (waiting to be realsed on DAC 2017)
    3. Maximizing CNN Accelerator Efficiency Through Resource Partitioning (wating to be reviewed)
    4. Exploring the Regularity of Sparse Structure inConvolutional Neural Networks (wating to be reviewed)
    5. Fast YOLO: A Fast You Only Look Once System for Real-time Embedded Object Detection in Video

* * *

## <a id="l_acc"></a>Inference accelerator
#### 1. SCNN: An Accelerator for Compressed-sparseConvolutional Neural Network

**Review**([Paper link](http://people.csail.mit.edu/anurag_m/papers/2017.scnn.isca.pdf))

#### 2. ZeNA: Zero-Aware Neural Network Accelerator

**Review**([Paper link](http://ieeexplore.ieee.org/document/8013151/))
A hardware architecture that skips zeros in a neural network.
The major problem of valina-sparsity is that parallel threads might have imbalanced
sparsity.
This hardware architecture locally broadcast to other processing units to help
balancing the workloads.
They also propose to use work stealing and dynamic allocations to balance the workloads.

## <a id="t_acc"></a>Training accelerator
#### 1. **CATERPILLAR: Coarse Grain Reconfigurable Architecture for Accelerating the Training of Deep Neural Networks**
 **Review**([Paper link](https://arxiv.org/abs/1706.00517))

## <a id="frameworks"></a>Frameworks
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
