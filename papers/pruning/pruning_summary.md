---
layout: default
---

# [](#list) List of papers
  * Coarse-grained pruning (Filter-wise, Kernel-wise)[details](#coarseprune)
    1. Pruning Filters for Efficient ConvNets (waiting review)
    2. Learning Structured Sparsity in Deep Neural Networks (waiting review)
    3. Fast ConvNets Using Group-wise Brain Damage (waiting review)
    4. Learning to Prune Deep Neural Networks via Layer-wise Optimal Brain Surgeon
    5. Net-Trim: A Layer-wise Convex Pruning of Deep Neural Networks
    6. Pruning Convolutional Neural Networks for Resource Efficient Transfer Learning

  * Fine-grained pruning [details](#fineprune)
    1. Learning both Weights and Connections for EfficientNeural Networks



  * Other types of pruning [details](#oprune)
    1. Customizing DNN Pruning to the Underlying Hardware
Parallelism (watiting to be released on ISCA 2017)
    2. Exploring the Regularity of Sparse Structure inConvolutional Neural Networks

  * Regularizers [details](#reg)

  * Quantization [details](#quan)
    1. Trained Ternary Quantization
    2. Quantized Neural Networks: Training Neural Networks with Low Precision Weights and Activations

* * *

## <a id="coarseprune"></a>Coarse-grained Pruning

#### **1. Pruning Filters for Efficient ConvNets**

**Review**([Paper link](https://arxiv.org/pdf/1608.08710)) Fine-grained sparsity requires libraries to explore its advantage. An interesting point: maintaining sparse data structures also creates an additional storage overhead which can be significant for low-precision weights.
Instead of layer-wise iterative fine-tuning (retraining), they use one-shot pruning and retraining to save retraining time for pruning filters across multiple layers, which is critical for pruning very deep networks.
Pruning based on sum of absolute kernel weights. Sort the rank based on that metric and prune the ones that have lowest value (very arbitrary in a sense). They introduced both **Independent pruning** and **Greedy pruning** for pruning across multiple layers. In **Independent pruning**, only filters in a same layers are considered, in contrast, **Greedy pruning** takes account of removed values in previous layers.
In ResNet, the pruning results can be affected by shorcutting connections, to prune the second convolutional layer of the residual block, the corresponding projected feature maps must also be pruned.
Smallest filter pruning outperforms feature map pruning with the metrics (eg: mean, std, meanl1, meanl2  ... ).

#### **2. Learning Structured Sparsity in Deep Neural Networks**

**Review**([Paper link](https://arxiv.org/pdf/1608.08710))
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

* * *

## <a id="fineprune"></a>Fine-grained Pruning
#### 1. **Learning both Weights and Connections for Efficient Neural Networks**
**Review**([Paper link](https://arxiv.org/pdf/1506.02626))
Fine-grained pruning, it discussed how to use regularizers and decrease dropouts.




## <a id="oprune"></a>Other types of Pruning
#### 1. **Customizing DNN Pruning to the Underlying Hardware Parallelism**

#### 2. **Exploring the Regularity of Sparse Structure inConvolutional Neural Networks**
> > **Review**([Paper link](https://arxiv.org/pdf/1607.00064))

* * *
## <a id="quan"></a>Quantization
#### 1. **Trained Ternary Quantization**
**Review**([Paper link](https://arxiv.org/abs/1612.01064))
Tenary representation is {-1,0,1} which is two-bit signed fixed-point arithmetic.
It performs 'normalize', 'quantize' and 'scale'.
The experiments are interesting because ResNets are used on Cifar10 and AlexNet is used on ImageNet, both models contain a high redundancy and thus it is hard to argue their compression results are legit.

#### 2. Quantized Neural Networks: Training Neural Networks with Low Precision Weights and Activations
**Review**([Paper link](https://arxiv.org/abs/1609.07061)
This paper proposed **Quantized Neural Network**.
All MAC operations are replaced by XNORs and population counts.
Quantized version of AlexNet with 1-bit weights and 2-bit activations achieves 51% top-1 accuracy.
BNN achieves 41.8% top-1 and 67.1% top-5 accuracy using AlexNet and 47.1% top-1 and 69.1%top-5 accuracy using GoogleNet

#### 3. **Exploring the Regularity of Sparse Structure inConvolutional Neural Networks**
**Review**([Paper link](https://arxiv.org/pdf/1607.00064))

#### 4. **Incremental Network Quantization: Towards Lossless CNNs with Low-Precision Weights**
**Review**([Paper link](https://arxiv.org/abs/1702.03044)

#### 4. **Deep Learning with Low Precision by Half-wave Gaussian Quantization**
**Review**([Paper link](https://arxiv.org/abs/1702.00953)

#### 5. **DoReFa-Net: Training Low Bitwidth Convolutional Neural Networks with Low Bitwidth Gradients**
**Review**([Paper link](https://arxiv.org/abs/1606.06160)
