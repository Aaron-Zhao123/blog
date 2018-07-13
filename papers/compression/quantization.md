---
layout: default
---

# [](#list) List of papers

  * Quantization Strategies and theoreis[details](#strategy)
    1. Fixed Point Quantization of Deep Convolutional Networks.
    2. Variational Network Quantization
    3.  Explicit Loss-Error-Aware Quantization for Low-Bit Deep Neural Networks
    4. Feature Quantization for Defending Against Distortion of Images
    5. Clip-Q: Deep Network Compression Learning by In-Parallel Pruning-Quantization

  * Fixed-point based Quantization [details](#fixedquan)
    1. Trained Ternary Quantization
    2. Ternary Neural Networks with Fine-Grained Quantization
    3. Deep Learning with Low Precision by Half-wave Gaussian Quantization
    4. Hardware-oriented Approximation of Convolutional Neural Networks
    5. Two-Step Quantization for Low-bit Neural Networks
    6. SYQ: Learning Symmetric Quantization For Efficient Deep Neural Networks
    7. Quantization and Training of Neural Networks for Efficient Integer-Arithmetic-Only Inference

  * Log-based, Float-based Quantization [details](#logquan)
    1. Incremental Network Quantization: Towards Lossless CNNs with Low-Precision Weights
    2. ShiftCNN: Generalized Low-Precision Architecture for Inference of Convolutional Neural Networks
    3. LogNet: Energy-efficient Neural Networks Using Logarithmic Computation
    4. Flexpoint: An Adaptive Numerical Format for EfficientTraining of Deep Neural Networks
    5. Convolutional Neural Networks using Logarithmic Data Representation

  * Quantized Training [details](#train)
    1. Quantized Neural Networks: Training Neural Networks with Low Precision Weights and Activations
    2. DoReFa-Net: Training Low Bitwidth Convolutional Neural Networks with Low Bitwidth Gradients
    3. Training deep neural networks with low precision multiplications
    4. Quantized Neural Networks: Training Neural Networks with Low Precision Weights and Activations
    5. Training Quantized Nets: A Deeper Understanding
    6. Training and Inference with Integers in Deep Neural Networks


## <a id="strategy"></a> Quantization Strategies

#### 1. Fixed Point Quantization of Deep Convolutional Networks (ICML 2016)

**Review**([Paper link](https://arxiv.org/abs/1511.06393))
Convert a pretrained network into a fixed-point model using the optimization
strategy based on signal-to-noise-ratio.
Simply quantizing all layers in a network with uniform bit-width value gives a
bad performance.

#### 2. Variational Network Quantization (ICLR 2018)

**Review**([Paper link])

Bayesian methods for network compression, it learns a posterior distribution over network weights under a sparsity-inducing prior.
The posterior distribution over the network allows identifying redundancies through:
1. weights with expected values close to zero
2. weights with a large variance
3. the posterior variance over non-pruned parameters can be used to determine the required bit-precision.

The pruned and quantized weights has an interesting distribution: a major peak at round zero and two peaks at the sides.

#### 3. Explicit Loss-Error-Aware Quantization for Low-Bit Deep Neural Networks

**Review**([Paper link])
This paper works on regularizing the loss perturbation from weights quantization.
The closed form of loss of quantization can be characterized as the differences of two values, they can open up the error term using first-order Taylor expansion and characterize the quantization loss.

#### 4. Feature Quantization for Defending Against Distortion of Images

**Review**([Paper link])
Recognition of distorted images is hard especially on distortions with high moments (skewness, kurosis).
This paper proposes that quantization helps in eliminating minor perturbation of features.
They propose a new approach to employ feature quantization while training CNNs. Briefly, we integrate the floor or power non-linearity function into the CNNs, such that the features from distorted images can be mapped to a new space with less divergence.

#### 5.Clip-Q: Deep Network Compression Learning by In-Parallel Pruning-Quantization

**Review**([Paper link])
This paper claims that decoupling pruning with quantization is probably a bad idea.
If pruning occurs before quantization, this means the loss caused by pruning cannot be recovered later by quantization.
This paper claims that mixing up the two in one-shot might benefit accuracy, since the loss of accuracy can be cancelled out.

* * *

## <a id="fixedquan"></a> Fixed-point based Quantization

#### 1. **Trained Ternary Quantization**
  **Review**([Paper link](https://arxiv.org/abs/1612.01064))
  Tenary representation is {-1,0,1} which is two-bit signed fixed-point arithmetic.
  It performs 'normalize', 'quantize' and 'scale'.
  The experiments are interesting because ResNets are used on Cifar10 and AlexNet is used on ImageNet, both models contain a high redundancy and thus it is hard to argue their compression results are legit.

#### 2. Ternary Neural Networks with Fine-Grained Quantization
**Review**([Paper link](https://arxiv.org/abs/1705.01462))
They hypothesize that weights that learn different types of features may follow different distributions.
Combining all the weights together represents a mixture of various distributions, and ternarizing them using a single threshold (∆) and magnitude (α) may not preserve the distributions of individual weights.

#### 3. **Deep Learning with Low Precision by Half-wave Gaussian Quantization**
**Review**([Paper link](https://arxiv.org/abs/1702.00953))
This paper mainly works on proposing a new acitvation function for the purpose
of quantizing activations.
They suggest that changing the forward pass of Relu to Half-wave Gaussian function,
which is just matching positive inputs to a number of discrete levels.
The discrete levels are derieved from the statistics of the entire network, basicaly, a profiling of the entire dataset is required to define these discrete
levels.
They arguet that, using HWG, binary networks can achieve good accuracy with only
2-bit activations.


#### 4. Hardware-oriented Approximation of Convolutional Neural Networks

**Review**([Paper link](https://arxiv.org/abs/1605.06402), [Code](http://lepsucd.com/?page_id=621))

This thesis describes a number of different quantization methods, including
fixed-point, dynamic fixed-point and mini-float.
The author suggests that dynamic fixed-point achieves the best performance.

#### 5.Two-Step Quantization for Low-bit Neural Networks

**Review**([Paper link]())
In the first step, all weights are full-precision and all activations are quantized to low-bitwidths.  In deep neural network, large activations are usually more important than small activations, which is the foundation of attention mechanism.
By turning a portion of the small positive activations into zeros, the quantization function can pay more attention to large values.
The second step is to learn how to transform one activation A_(l-1) to A_(l), this can be formed as a non-linear least square regression problem, which makes me feel very surprised, because apparently this regression should happen for all possible activations in all training dataset, which they did not specify.

#### 6. SYQ: Learning Symmetric Quantization For Efficient Deep Neural Networks

**Review**([Paper link]())
The quantization granularity can be going down to subgroups inside one tensor. This papers suggests two grouping: pixel-wise and row-wise. Pixel-wise translates to column wise grouping in BLAS, and row-wise translates to grouping multiple columns in BLAS.

#### 7. Quantization and Training of Neural Networks for Efficient Integer-Arithmetic-Only Inference

**Review**([Paper link]())
Very solid Google paper, the results match what Pete sent us. They basically emulate the effect of quantizations as well

* * *

## <a id="logquan"></a> Log based and Float based Quantization

#### 1. **Incremental Network Quantization: Towards Lossless CNNs with Low-Precision Weights**

**Review**([Paper link](https://arxiv.org/abs/1702.03044))
Method description:
1. Partition weights into two groups.
2. Quantize the first group to powers of tows, retrain the second group.
3. Go back to 1 until all weights are quantized.

The results are amazing, 89× on Alexnet with -1.47%/-0.96% on top1/top5 accuracies.
 
#### 2. ShiftCNN: Generalized Low-Precision Architecture for Inference of Convolutional Neural Networks
**Review**([Paper link]())
This paper shows surprisingly good results for shift based quantization.
The key concept is to allow multiple shifts to occur on weights.
This increases resolution by a significant amount.

#### 3. LogNet: Energy-efficient Neural Networks Using Logarithmic Computation
**Review**([Paper link]())
This is a hardware implmentation of the original LogNet paper to further prove that elimination of bulky multipliers increases energy efficiency.

#### 4. Flexpoint: An Adaptive Numerical Format for EfficientTraining of Deep Neural Networks
**Review**([Paper link](https://arxiv.org/abs/1711.02213))
This is a special floating point arithmetic with a section of the exponent that
is shared, but also maintains their own exponent bits.

#### 5. Convolutional Neural Networks using Logarithmic Data Representation
**Review**([Paper link](https://arxiv.org/abs/1603.01025))
This paper presents how to quantize a network in log domain.
This includes using base-2 logs and normal base logs.
**Convolution layers are more sensitive than fc layers.**
The guess is fc weights are used only once per input image but convolutional
weights are reused multiple times.
The results are presented in the following table, conv layers are 5 bits but fc layers are 4 bits.

|  Networks     | Linear | Base 2 log | Base root 2 log|
| ------------- | ------- | ----------- |---------------|
| AlexNet      | 73.6%  | 70.6%      | 75.1%          |
| Vgg16        | 85.1%  | 83.4%      | 89.0%          |

* * *

## <a id="train"></a> Quantized Training

#### 1. Quantized Neural Networks: Training Neural Networks with Low Precision Weights and Activations

**Review**([Paper link](https://arxiv.org/abs/1609.07061))
This paper proposed **Quantized Neural Network**.
All MAC operations are replaced by XNORs and population counts.
Quantized version of AlexNet with 1-bit weights and 2-bit activations achieves 51% top-1 accuracy.
BNN achieves 41.8% top-1 and 67.1% top-5 accuracy using AlexNet and 47.1% top-1 and 69.1%top-5 accuracy using GoogleNet

#### 2. **DoReFa-Net: Training Low Bitwidth Convolutional Neural Networks with Low Bitwidth Gradients**

**Review**([Paper link](https://arxiv.org/abs/1606.06160), [Code](https://github.com/ppwwyyxx/tensorpack/tree/master/examples/DoReFa-Net))
DoReFa-Net is built on Tensorpack -- using python monkey patching to override
the back propagation of gradients.
They suggest weights and activations can be deterministically quantized, but
gradients have to be quantized in a stochasitc manner.
Using a gradient with bit width less than four can significantly impact
training and prediction accuracy.
Two major concerns on this work
1. The bit-wdith limitation is not really a fixed-point quantization.
2. Round-off error propagation on low precision is significant.

#### 3. Training deep neural networks with low precision multiplications

**Review**([Paper link](https://arxiv.org/abs/1412.7024))
This paper presents how fixed-point and dynamic fixed-point quantization works.
The convergence algorithm of dynamic fixed point is shown in this paper.

#### 4. Quantized Neural Networks: Training Neural Networks with Low Precision Weights and Activations
**Review**([Paper link](https://arxiv.org/abs/1609.07061))
This works shows very aggressive quantization: AlexNet with 1-bit weights and
2-bits activations.
The gradients are also quantized to 6 bits.
When training BNNs, they constraint activations to be either +1 or -1.
The gradients propagation is a discrete function since they ignored noise, and
batch norm becomes shifting.
 

#### 5. Training Quantized Nets: A Deeper Understanding
**Review**([Paper link](https://arxiv.org/abs/1706.02379))
This paper shows a theoretical proof of why algorithms that are quantizing in a non-linear form work relatively well because it can converge to a true minimal in a convex set up.

#### 6. Training and Inference with Integers in Deep Neural Networks
**Review**([Paper link](https://arxiv.org/abs/1802.04680), [Code](https://github.com/boluoweifenda/WAGE))
This work focuses on training and inference with interger-based arithmetic.
They propose quantizing WAGE (weights, activations, gradients and errors).
The error term refers to the gradients on activations, these values turn out to be very small.
