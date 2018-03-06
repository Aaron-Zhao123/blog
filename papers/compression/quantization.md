---
layout: default
---

# [](#list) List of papers
  * Quantization [details](#quan)
    1. Trained Ternary Quantization
    2. Quantized Neural Networks: Training Neural Networks with Low Precision Weights and Activations
    3. Incremental Network Quantization: Towards Lossless CNNs with Low-Precision Weights
    4. Deep Learning with Low Precision by Half-wave Gaussian Quantization
    5. DoReFa-Net: Training Low Bitwidth Convolutional Neural Networks with Low Bitwidth Gradients
    6. Hardware-oriented Approximation of Convolutional Neural Networks
    7. Training deep neural networks with low precision multiplications
    8. Quantized Neural Networks: Training Neural Networks with Low Precision Weights and Activations
    9. Variational Network Quantization
    10. Fixed Point Quantization of Deep Convolutional Networks
    11. Flexpoint: An Adaptive Numerical Format for EfficientTraining of Deep Neural Networks
    12. Convolutional Neural Networks using Logarithmic Data Representation
    13. Ternary Neural Networks with Fine-Grained Quantization
    14. Training Quantized Nets: A Deeper Understanding
    15. ShiftCNN: Generalized Low-Precision Architecture for Inference of Convolutional Neural Networks
    16. LogNet: Energy-efficient Neural Networks Using Logarithmic Computation

    * * *
    ## <a id="quan"></a>Quantization
    #### 1. **Trained Ternary Quantization**
    **Review**([Paper link](https://arxiv.org/abs/1612.01064))
    Tenary representation is {-1,0,1} which is two-bit signed fixed-point arithmetic.
    It performs 'normalize', 'quantize' and 'scale'.
    The experiments are interesting because ResNets are used on Cifar10 and AlexNet is used on ImageNet, both models contain a high redundancy and thus it is hard to argue their compression results are legit.

    #### 2. Quantized Neural Networks: Training Neural Networks with Low Precision Weights and Activations
    **Review**([Paper link](https://arxiv.org/abs/1609.07061))
    This paper proposed **Quantized Neural Network**.
    All MAC operations are replaced by XNORs and population counts.
    Quantized version of AlexNet with 1-bit weights and 2-bit activations achieves 51% top-1 accuracy.
    BNN achieves 41.8% top-1 and 67.1% top-5 accuracy using AlexNet and 47.1% top-1 and 69.1%top-5 accuracy using GoogleNet

    #### 3. **Incremental Network Quantization: Towards Lossless CNNs with Low-Precision Weights**
    **Review**([Paper link](https://arxiv.org/abs/1702.03044))
    Method description:
    1. Partition weights into two groups.
    2. Quantize the first group to powers of tows, retrain the second group.
    3. Go back to 1 until all weights are quantized.

    The results are amazing, 89× on Alexnet with -1.47%/-0.96% on top1/top5 accuracies.

    #### 4. **Deep Learning with Low Precision by Half-wave Gaussian Quantization**
    **Review**([Paper link](https://arxiv.org/abs/1702.00953))
    This paper mainly works on proposing a new acitvation function for the purpose
    of quantizing activations.
    They suggest that changing the forward pass of Relu to Half-wave Gaussian function,
    which is just matching positive inputs to a number of discrete levels.
    The discrete levels are derieved from the statistics of the entire network, basicaly, a profiling of the entire dataset is required to define these discrete
    levels.
    They arguet that, using HWG, binary networks can achieve good accuracy with only
    2-bit activations.

    #### 5. **DoReFa-Net: Training Low Bitwidth Convolutional Neural Networks with Low Bitwidth Gradients**
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

    #### 6. Hardware-oriented Approximation of Convolutional Neural Networks
    **Review**([Paper link](https://arxiv.org/abs/1605.06402), [Code](http://lepsucd.com/?page_id=621))
    This thesis describes a number of different quantization methods, including
    fixed-point, dynamic fixed-point and mini-float.
    The author suggests that dynamic fixed-point achieves the best performance.

    #### 7. Training deep neural networks with low precision multiplications
    **Review**([Paper link](https://arxiv.org/abs/1412.7024))
    This paper presents how fixed-point and dynamic fixed-point quantization works.
    The convergence algorithm of dynamic fixed point is shown in this paper.

    #### 8. Quantized Neural Networks: Training Neural Networks with Low Precision Weights and Activations
    **Review**([Paper link](https://arxiv.org/abs/1609.07061))
    This works shows very aggressive quantization: AlexNet with 1-bit weights and
    2-bits activations.
    The gradients are also quantized to 6 bits.
    When training BNNs, they constraint activations to be either +1 or -1.
    The gradients propagation is a discrete function since they ignored noise, and
    batch norm becomes shifting.

    #### 9. Variational Network Quantization (ICLR 2018)
    **Review**([Paper link])
    Bayesian methods for network compression, it learns a posterior distribution over network weights under a sparsity-inducing prior.
    The posterior distribution over the network allows identifying redundancies through:
    1. weights with expected values close to zero
    2. weights with a large variance
    3. the posterior variance over non-pruned parameters can be used to determine the required bit-precision.

    The pruned and quantized weights has an interesting distribution: a major peak at round zero and two peaks at the sides.

    #### 10. Fixed Point Quantization of Deep Convolutional Networks (ICML 2016)
    **Review**([Paper link](https://arxiv.org/abs/1511.06393))
    Convert a pretrained network into a fixed-point model using the optimization
    strategy based on signal-to-noise-ratio.
    Simply quantizing all layers in a network with uniform bit-width value gives a
    bad performance.

    #### 11. Flexpoint: An Adaptive Numerical Format for EfficientTraining of Deep Neural Networks
    **Review**([Paper link](https://arxiv.org/abs/1711.02213))
    This is a special floating point arithmetic with a section of the exponent that
    is shared, but also maintains their own exponent bits.

    #### 12. Convolutional Neural Networks using Logarithmic Data Representation
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



  #### 13. Ternary Neural Networks with Fine-Grained Quantization
  **Review**([Paper link](https://arxiv.org/abs/1705.01462))
  They hypothesize that weights that learn different types of features may follow different distributions.
  Combining all the weights together represents a mixture of various distributions, and ternarizing them using a single threshold (∆) and magnitude (α) may not preserve the distributions of individual weights.

  #### 14. Training Quantized Nets: A Deeper Understanding
  **Review**([Paper link](https://arxiv.org/abs/1706.02379))
  This paper shows a theoretical proof of why algorithms that are quantizing in a non-linear form work relatively well because it can converge to a true minimal in a convex set up.

  #### 15. ShiftCNN: Generalized Low-Precision Architecture for Inference of Convolutional Neural Networks
  **Review**([Paper link]())
  This paper shows surprisingly good results for shift based quantization.
  The key concept is to allow multiple shifts to occur on weights.
  This increases resolution by a significant amount.

  #### 16. LogNet: Energy-efficient Neural Networks Using Logarithmic Computation
  **Review**([Paper link]())
  This is a hardware implmentation of the original LogNet paper to further prove that elimination of bulky multipliers increases energy efficiency.
