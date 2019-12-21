***

# Network Pruning

## [](#list) List of papers

  * Coarse-grained pruning (Filter-wise, Kernel-wise)
    1. Pruning Filters for Efficient ConvNets (waiting review)
    2. Learning Structured Sparsity in Deep Neural Networks (waiting review)
    3. Fast ConvNets Using Group-wise Brain Damage (waiting review)
    4. Learning to Prune Deep Neural Networks via Layer-wise Optimal Brain Surgeon
    5. Net-Trim: A Layer-wise Convex Pruning of Deep Neural Networks
    6. Pruning Convolutional Neural Networks for Resource Efficient Transfer Learning
    7. Compact Deep Convolutional Neural Networks with Coarse Pruning
    8. To prune, or not to prune: exploring the efficacy of pruning for model compression
    9. NIPS: Pruning Networks using Neuron Importance Score Propagation
    10. Discrimination-aware Channel Pruning for Deep Neural Networks
    11. Gate Decorator: Global Filter Pruning Method for Accelerating Deep Convolutional Neural Networks

  * Fine-grained pruning
    1. Optimal Brain Damage
    2. Second order derivatives for network pruning: Optimal Brain Surgeon
    3. Learning both Weights and Connections for EfficientNeural Networks
    4. “Learning-Compression” Algorithms for Neural Net Pruning
    5. Deep k-Means: Re-Training and Parameter Sharing with Harder Cluster Assignments for Compressing Deep Convolutions
    6. Frequency-domain Dynamic Pruning for Convolutional Neural Networks
    7. Compressing Neural Networks using the Variational Information Bottleneck
    8. Weightless: Lossy weight encoding for deep neural network compression
    9. Global Sparse Momentum SGD for Pruning Very Deep Neural Networks

  * Other types of pruning
    1. Customizing DNN Pruning to the underlying hardware parallelism (watiting to be released on ISCA 2017)
    2. Exploring the Regularity of Sparse Structure in Convolutional Neural Networks
    3. Efficient Sparse Winograd Convolutional Neural Networks
    4. PackNet: Adding Multiple Tasks to a Single Network by Iterative Pruning

* * *

## Coarse-grained Pruning

#### **1. Pruning Filters for Efficient ConvNets**

**Review**([Paper link](https://arxiv.org/pdf/1608.08710))

Fine-grained sparsity requires libraries to explore its advantage. An interesting point: maintaining sparse data structures also creates an additional storage overhead which can be significant for low-precision weights.
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

#### 9. NIPS: Pruning Networks using Neuron Importance Score Propagation (CVPR 2018)

**Review**([Paper link]())

The paper suggested another closed-form solution to find the correct neuron to prune. One key insight is that they deduce the importance of features by looking at the matrix’s power series. They then propagate back the importance measure to each layer to construct an importance measure for each node.

#### 10. Discrimination-aware Channel Pruning for Deep Neural Networks (NIPS 2018)

**Review**([Paper link]())

This paper suggests doing a Lp norm before performing channel pruning.
p can be any arbitrary numbers to this additional Lp norm is fine-tuned
on the pruned model.
The paper suggests that this process helps each channel to gain
discrimination-power and thus makes pruning easier.
I simply think this argument is a bit too vague...

#### 11. Gate Decorator: Global Filter Pruning Method for Accelerating Deep Convolutional Neural Networks (NeurIPS 2019)

**Review**([Paper link]())

A global filter pruning algorithm using a channel-wise scaling
factor.
A taylor expansion is used to estimate the effect of turning
scale factors to zero.
Turning a single scale factor to zero causes a change in loss
and this change can be approximated by a first order Taylor.
The selection of least important channels is global and
the later step is fine-tuning.

* * *

#### **1. Optimal Brain Damage**

**Review**([Paper link](http://yann.lecun.com/exdb/publis/pdf/lecun-90b.pdf))

Use second-order Taylor expansion to find parameters to prune. Perform second-orderr taylor expansion to emulate the increase in the loss function when a weight is set to zero. The saliency for each parameter was computed using a diagonal Hessian approximation, and the low-saliency parameters were pruned from the network and the network was retrained.

#### **2. Second-order derivatives for network pruning: Optimal Brain Surgeon**

**Review**([Paper link](http://papers.nips.cc/paper/647-second-order-derivatives-for-network-pruning-optimal-brain-surgeon.pdf))

The saliency for each parameter was computed using the inverse Hessian matrix, and the low-saliency weights are pruned and all other weights in the network are updated using the second-order information.

#### 3. **Learning both Weights and Connections for Efficient Neural Networks**

**Review**([Paper link](https://arxiv.org/pdf/1506.02626))

Fine-grained pruning, it discussed how to use regularizers and decrease dropouts based on sparsity.

#### 4. “Learning-Compression” Algorithms for Neural Net Pruning

**Review**([Paper link]())(CVPR2018)

Pruning has been traditionally done by ranking or penalizing weights according to some criterion (such as magnitude), removing low-ranked weights and retraining the remaining ones.
A more direct form of the question is to remove weights that are not important to the loss function. This paper proposes genetic algorithm to search for the best metric that turns out to be very different from magnitude based metrics.

#### 5. "Deep k-Means: Re-Training and Parameter Sharing with Harder Cluster Assignments for Compressing Deep Convolutions"

**Review**([Paper link]())(ICML2018)

This paper proposes to put the cost of K-means as a regularization
term into the cost function of SGD.
The learned weights are thus more suitable for a K-means clustering.
The SVD factors of K-means are lazy computed -- meaning that they only update
after a few epochs.

#### 6. Frequency-domain Dynamic Pruning for Convolutional Neural Networks (NIPS 2018)

**Review**([Paper link]())(NIPS2018)

This paper proposes a simple idea of converting convolution to the
frequency domain and then apply DNS.
The experiments results are not persuading though, since it's all about
alexnet on imagnet and resent on cifar.

#### 7. Compressing Neural Networks using the Variational Information Bottleneck

**Review**([Paper link]())(ICML2018)

This paper proposes a information bottleneck.
Minimization of this information theoretic bound reduces the redundancy between adjacent layers by aggregating useful information into a subset of neurons that can be preserved.
In contrast, the activations of disposable neurons are shut off via an attractive form of sparse regularization that emerges naturally from this framework, providing tangible advantages over traditional sparsity penalties without contributing additional tuning parameters to the energy landscape.

#### 8. Weightless: Lossy weight encoding for deep neural network compression

**Review**([Paper link]())(ICML2018)

Weightless is a lossy encoding scheme based on Bloomier filters.
The idea of Bloomier filter is a loassy hashing system with a probabilistic false positive answer.
This compression results are not that impressive, but it seems like this hashing mechanism can be very hardware friendly.

#### 9. Global Sparse Momentum SGD for Pruning Very Deep Neural Networks

**Review**([Paper link](https://arxiv.org/abs/1909.12778))(NeurIPS2019)

The paper presents a global pruning algorithm that requires a gloabal
pruning ratio.
Using first order taylor to approximate the effect of zeroing out
parameters, this is then used as a metric in momentum SGD
to decide on which values to propagate on.


***

## Fine-grained Pjuning

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

#### 3. Efficient Sparse Winograd Convolutional Neural Networks

**Review**([Paper link](https://arxiv.org/abs/1802.06367))

The basic block of Winograd works on a certain tile size.
The valilla pruned model does not provide any savings, sparsity does not
reduce the number of multiplications.
An alternative is to prune weights in the Winograd-domain, which
directly reduces the number of multiplications.
Note the Relu function can be transformed to the Winograd-domain hence further
reduces the number of multiplications.

#### 4. PackNet: Adding Multiple Tasks to a Single Network by Iterative Pruning

**Review**([Paper link]())(CVPR 2018)

Catastrophic forgetting refers to how the neural network loses its accuracy for the original dataset when shown to learn a new dataset while the old dataset becomes invisible.
The paper presented a method that basically prunes weights away for each task and then it can create task-specific pruning masks to share the weights in the same network to avoid catastrophic forgetting.
