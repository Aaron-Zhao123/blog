---
layout: default
---

# [](#list) List of papers
  * Coarse-grained pruning (Filter-wise, Kernel-wise) [details](#coarseprune)
    1. Pruning Filters for Efficient ConvNets (waiting review)
    2. Learning Structured Sparsity in Deep Neural Networks (waiting review)
    3. Fast ConvNets Using Group-wise Brain Damage (waiting review)
    4. Learning to Prune Deep Neural Networks via Layer-wise Optimal Brain Surgeon
    5. Net-Trim: A Layer-wise Convex Pruning of Deep Neural Networks
    6. Pruning Convolutional Neural Networks for Resource Efficient Transfer Learning
    7. Compact Deep Convolutional Neural Networks with Coarse Pruning

  * Fine-grained pruning [details](#fineprune)
    1. Optimal Brain Damage
    2. Second order derivatives for network pruning: Optimal Brain Surgeon
    3. Learning both Weights and Connections for EfficientNeural Networks


  * Other types of pruning [details](#oprune)
    1. Customizing DNN Pruning to the Underlying Hardware
Parallelism (watiting to be released on ISCA 2017)
    2. Exploring the Regularity of Sparse Structure inConvolutional Neural Networks

  * Conditional Computation[details](#condcompute)
    1. Conditional Computation in Neural Networks for faster models

  * Regularizers [details](#reg)

  * Knowledge Distillation [details](#kdist)
    1. Apprentice: Using knowledge distillation techniques to improve low-precision networks accuracy

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

  * Efficient Structures [details](#fineprune)
    1. SplitNet: Learning to Semantically Split Deep Networks for Parameter Reduction and Model Parallelization
    2. CirCNN: Accelerating and Compressing Deep Neural Networks Using Block-Circulant Weight Matrices
    3. An Exploration of Parameter Redundancy in Deep Networks with Circulant Projections
    4. Shift: A Zero FLOP, Zero Parameter Alternative to Spatial Convolutions

* * *

## <a id="coarseprune"></a>Coarse-grained Pruning

#### **1. Pruning Filters for Efficient ConvNets**

**Review**([Paper link](https://arxiv.org/pdf/1608.08710)) Fine-grained sparsity requires libraries to explore its advantage. An interesting point: maintaining sparse data structures also creates an additional storage overhead which can be significant for low-precision weights.
Instead of layer-wise iterative fine-tuning (retraining), they use one-shot pruning and retraining to save retraining time for pruning filters across multiple layers, which is critical for pruning very deep networks.
Pruning based on sum of absolute kernel weights. Sort the rank based on that metric and prune the ones that have lowest value (very arbitrary in a sense). They introduced both **Independent pruning** and **Greedy pruning** for pruning across multiple layers. In **Independent pruning**, only filters in a same layers are considered, in contrast, **Greedy pruning** takes account of removed values in previous layers.
In ResNet, the pruning results can be affected by shortcutting connections, to prune the second convolutional layer of the residual block, the corresponding projected feature maps must also be pruned.
Smallest filter pruning outperforms feature map pruning with the metrics (eg: mean, std, meanl1, meanl2  ... ).

#### **2. Learning Structured Sparsity in Deep Neural Networks**

**Review**([Paper link](https://arxiv.org/abs/1608.03665))
This paper explores filer-wise, channel-wise, shape-wise and depth-wise
sparsities. Penalizing multiple weights structures using group-lasso (
adding arbitrary hyperparameters in the cost function). The interesting observation
is to combine both filter-wise and shape-wise sparsity in GEMM operations,
where a high dimensional matrix is unrolled to a flat one. The rows and
columns of GEMM can be removed directly. Their code can be found at
[here](https://github.com/wenwei202/caffe/tree/scnn).

#### **3. Fast ConvNets Using Group-wise Brain Damage**

**Review**([Paper link](https://arxiv.org/pdf/1506.02515))
This paper has a nice explaination of GEMM (generalized matrix multiplication). The consider a
"group regularizer" that is essentially based on
L2 and L1 norms.
Two pruning strategies are considered. The first
method adds the regularizer directly to a trained network and force a number of groups with smallest L2 norms to zeros.
The second method inspects a validation set and
increase the "brain damage" with a control of
loss of test accuracy.

#### **4. Learning to Prune Deep Neural Networks via Layer-wise Optimal Brain Surgeon**

**Review**([Paper link](https://arxiv.org/pdf/1705.07565))
This paper proposed a new layer-wise pruning method, and theoretically proved that only a light retraining is required to resume the test accuracy.
The parameters with least increase of error approximated by second-order directives are pruned. The second order derivative approximation requires an inverse of Hessian Matrix. This work makes computation easier by: 1. compute layer-wise Hessian; 2. compute a block-wise pesudo-inverse of Hessian and then populate to the whole dataset.

Consider a trained network, if we prune an arbitrary weight away, it will affect our loss function.
The change in loss function can be broken down into a Taylor expansion. The first derivative is zero since network is well trained (back prop gradient is zero), so the error can be approximated using the second derivative if ignoring other high order terms.
Computing such second-order derivative requires an inverse of hessian matrix and this becomes the computation bottleneck. Because hessian matrix of a network is N*N where N is the total parameter count.

**Highlights**:
1. The only parameter we have to control is the layer-wise error to ensure gradient to be small enough after pruning.
That is one of reasons why there is a “pruning inflection point” after which layer-wise error would drop dramatically.
2. Significantly less retraining iterations, around two magnitudes smaller than other popular methods.

#### **5. Net-Trim: A Layer-wise Convex Pruning of Deep Neural Networks**
**Review** ([Paper link](https://arxiv.org/pdf/1611.05162))
The first (maybe) paper considers second-order directive pruning in a layer-wise fashion.
A series of convex solvers are used at each layer.
(This is a long paper and a more careful read might happen later)

#### **6. Pruning Convolutional Neural Networks for Resource Efficient Inference**
**Review**([Paper link](https://arxiv.org/abs/1611.06440))
This work limits itself to transfer learning, where large networks are adapted to specialized tasks.
In such user cases, pruning offers a large compression.
This work proposed a pruning strategy that focuses on the first-order gradient.
The criteria prunes parameters that have an almost flat gradient of the cost function with respect to the feature maps.

**Highlights**:
1. Based on the assumption that samples are iid, it avoids computing the second-order term of tayler series compared to Optimal Brain Damage(OBD). They use the expectation value of the absolute value of the first order term to approximate variance.
2.  FLOPs regularization: add extra term into the cost function to regularize flops per feature map. Feature maps with larger flops are penalized.

#### **7. Compact Deep Convolutional Neural Networks with Coarse Pruning**
**Review**([Paper link](https://arxiv.org/abs/1610.09639))
This work chooses pruning masks based on the accuracy performance on the validation
set, but it might not be correct to do so.
The results are reported on Cifar10 and SVHN, both of these are relatively
small datasets.
They mentioned exploring run-time pruning in their future works.

#### 8. To prune, or not to prune: exploring the efficacy of pruning for model compression
**Review**([Paper link](https://arxiv.org/abs/1710.01878))
This paper presents a threshold based pruning method and shows very good compression results on mobilnet.
They conclude that large-sparse models outperform comparably-sized small-dense models across a diverse set of neural network architectures.
I think the reason of their high compression rate on mobilent is because that they do not prune the parameters in the one standard convolution layer and in the depthwise convolution layers since there are very few parameters in these layers (1.1% of the total number of parameters)

* * *

## <a id="fineprune"></a>Fine-grained Pruning
#### **1. Optimal Brain Damage**
**Review**([Paper link](http://yann.lecun.com/exdb/publis/pdf/lecun-90b.pdf)) Use second-order Taylor expansion to find parameters to prune. Perform second-orderr taylor expansion to emulate the increase in the loss function when a weight is set to zero. The saliency for each parameter was computed using a diagonal Hessian approximation, and the low-saliency parameters were pruned from the network and the network was retrained.

#### **2. Second-order derivatives for network pruning: Optimal Brain Surgeon**
**Review**([Paper link](http://papers.nips.cc/paper/647-second-order-derivatives-for-network-pruning-optimal-brain-surgeon.pdf))  
The saliency for each parameter was computed using the inverse Hessian matrix, and the low-saliency weights are pruned and all other weights in the network are updated using the second-order information.

#### 3. **Learning both Weights and Connections for Efficient Neural Networks**
**Review**([Paper link](https://arxiv.org/pdf/1506.02626))
Fine-grained pruning, it discussed how to use regularizers and decrease dropouts based on sparsity.




## <a id="oprune"></a>Other types of Pruning
#### 1. **Customizing DNN Pruning to the Underlying Hardware Parallelism**

#### 2. **Exploring the Regularity of Sparse Structure inConvolutional Neural Networks**
**Review**([Paper link](https://arxiv.org/abs/1705.08922))
This paper classifies pruning into various granularities:
1. Fine-grained (individual values)
2. Vector wise
3. Kernel wise
4. Filter wise
The interesting observation they make is that:
1. sparsity structure does not impact quantization (Figure 6)
2. Vector-wise pruning shows similar results to valina pruning (Table 2)


* * *
## <a id="condcompute"></a>Conditional Computation / Run-time Pruning
#### 1. **Conditional Computation in Neural Networks for faster models**
**Review**([Paper link](https://arxiv.org/abs/1511.06297))
Conditional computation refers to an operation that selectively
activating only parts of the network at a time.
This paper claims it uses reinfocement to learn a conditional computation
policy.
The authors propose to learn input-dependent activation probabilities
for every node (or blocks of nodes), while trying to jointly minimize the
prediction errors at the output and the number of participating nodes at
every layer, thus reducing the computational load.
This can be also viewed as a "conditional" version of dropout.
This mehtod works by predicting the active blocking units using its local
activations.

#### 2. **Outrageously Large Neural Networks: The Sparsely-Gated Mixture-of-Experts Layer**
**Review**([Paper link](https://arxiv.org/abs/1701.06538))
The sparsely-gated mixture of experts consits a number of feed-forward neural
networks (experts), a trainable gating network select a sparse combination of
the experts to process each input.
All parts of the components are trained by backpropagation.
This model is applied on very large datasets and large recognition tasks.

#### 3. **Outrageously Large Neural Networks: The Sparsely-Gated Mixture-of-Experts Layer**


* * *
## <a id="kdist"></a>Knowledge Distillation
#### 1. Apprentice: Using Knowledge Distillation Techniques to improve low-precision network accuracy
**Review**([Paper link]())
Knowledge distillation refers to using a teacher network to guide a student network.
The new cost functions contains costs of two separated networks and a knowledge distillation term.
The knowledge distillation term is simply a cross entropy function with two inputs, the first input is the pre-softmax logits of the teacher network and the second input is the post-softmax results of the student network.

In this paper, there are three schemes.
In the first scheme, a low-precision network and a full-precision network are jointly trained from scratch using knowledge distillation scheme.
In the second scheme, they start with a full-precision trained network and transfer knowledge from this trained network continuously to train a low-precision network from scratch.
In the third scheme, they start with a trained full-precision large network and an student network that has been initialised with full-precision weights.



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

| Networks     | Linear | Base 2 log | Base root 2 log|
|:-------------|:-------|:-----------|:---------------|
| AlexNet      | 73.6%  | 70.6%      | 75.1%          |
| Vgg16        | 85.1%  | 83.4%      | 89.0%          |


#### 13. Ternary Neural Networks with Fine-Grained Quantization
**Review**([Paper link]())
They hypothesize that weights that learn different types of features may follow different distributions.
Combining all the weights together represents a mixture of various distributions, and ternarizing them using a single threshold (∆) and magnitude (α) may not preserve the distributions of individual weights.

#### 14. Training Quantized Nets: A Deeper Understanding
**Review**([Paper link]())

#### 15. ShiftCNN: Generalized Low-Precision Architecture for Inference of Convolutional Neural Networks
**Review**([Paper link]())
This paper shows surprisingly good results for shift based quantization.
The key concept is to allow multiple shifts to occur on weights.
This increases resolution by a significant amount.

#### 16. LogNet: Energy-efficient Neural Networks Using Logarithmic Computation
**Review**([Paper link]())
This is a hardware implmentation of the original LogNet paper to further prove that elimination of bulky multipliers increases energy efficiency.


* * *
## <a id="quan"></a> Novel Structures

#### 1. **SplitNet: Learning to Semantically Split Deep Networks for Parameter Reduction and Model Parallelization**
**Review**([Paper link](https://arxiv.org/abs/1612.01064)) This paper proposed a technique that splits a network into a number of sub-networks
by learning classes-to-group and features-to-group information.
The learned network has common lower layers but a number of groups of disjoint
sets of features.
These branches (groups of features) are embarrassingly parallel and thus is easier
to execute in parallel.
The classes-to-group and features-to-group assignments are added into the cost
function.
After splitting, each weight matrix becomes block-wise diagonal.

#### 2. CirCNN: Accelerating and Compressing Deep Neural Networks Using Block-Circulant Weight Matrices
**Review**([Paper link](https://arxiv.org/abs/1708.08917))
This paper presents a way of performing network compression without any re-training.
Instead, it proposed a new way of encoding weights and proved formally that
this new representation has the same "effectiveness" as original DNNs.
Followed by the assumption that layers can be represented by block-circulant
matrices, it can apply FFT to perform inference and training, and the hugely
compress the number of parameters required to store on-chip.
Interesting enough, this paper did not present any experimental results on
current popular networks to suggest they can achieve the same accuracy.

#### 3.An Exploration of Parameter Redundancy in Deep Networks with Circulant Projections
**Review**([Paper link]())
This paper uses almost the identical method presented in CirCNN, however,
it shows the performance numbers.
In general, FFT based compression still has lower accuracy compared to original
models.
Theoretically, this is a pruning method that prunes information in the
frequency domain.
It is therefore very hard to argue a formally that it could reach a global minimum
on the optimization space?

#### 4. Shift: A Zero FLOP, Zero Parameter Alternative to Spatial Convolutions
**Review**([Paper link](https://arxiv.org/abs/1711.08141))
The shift operation moves each channel of its input tensor in a different spatial
direction.
A shift-based module interleaves shift operations with point-wise convolutions,  
which further mixes spatial information across channels.

#### 5. Model compression as constrained optimization, with application to neural nets. (2017 NIPS)
This theoretical paper presents a learning framework that works with any compression techniques.
The basic idea is to use augmented Lagrangian and alternating optimization.
Two alternating losses are proposed and represents learning the model and learning the compression respectively.
