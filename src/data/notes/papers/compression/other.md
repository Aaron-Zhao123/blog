
***

# Other Efficient Methods

## [](#list) List of papers

* Conditional Computation
  1. Conditional Computation in Neural Networks for faster models
  2. Outrageously Large Neural Networks: The Sparsely-Gated Mixture-of-Experts Layer

* Regularizers

* Knowledge Distillation
  1. Apprentice: Using knowledge distillation techniques to improve low-precision networks accuracy
  2. Paraphrasing Complex Network: Network Compression via Factor Transfer

* Efficient Structures
  1. SplitNet: Learning to Semantically Split Deep Networks for Parameter Reduction and Model Parallelization
  2. CirCNN: Accelerating and Compressing Deep Neural Networks Using Block-Circulant Weight Matrices
  3. An Exploration of Parameter Redundancy in Deep Networks with Circulant Projections
  4. Shift: A Zero FLOP, Zero Parameter Alternative to Spatial Convolutions
  5. Model compression as constrained optimization, with application to neural nets
  6. Learning Versatile Filters for Efficient Convolutional Neural Networks
  7. ChannelNets: Compact and Efficient Convolutional Neural Networks via Channel-Wise Convolutions



* * *

## Conditional Computation / Run-time Pruning

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

* * *

## Knowledge Distillation

#### 1. Apprentice: Using Knowledge Distillation Techniques to improve low-precision network accuracy

**Review**([Paper link]())

Knowledge distillation refers to using a teacher network to guide a student network.
The new cost functions contains costs of two separated networks and a knowledge distillation term.
The knowledge distillation term is simply a cross entropy function with two inputs, the first input is the pre-softmax logits of the teacher network and the second input is the post-softmax results of the student network.

In this paper, there are three schemes.
In the first scheme, a low-precision network and a full-precision network are jointly trained from scratch using knowledge distillation scheme.
In the second scheme, they start with a full-precision trained network and transfer knowledge from this trained network continuously to train a low-precision network from scratch.
In the third scheme, they start with a trained full-precision large network and an student network that has been initialised with full-precision weights.

#### 2.Paraphrasing Complex Network: Network Compression via Factor Transfer

**Review**([Paper link]())(NeuralIPS 2018)
This is a nice piece of work in theory but lacks experiemnts.
Ordinary (old) knolwedge distillation works on the last layer, where the logits values are directly compared between the students and the teacher.
Later, attention maps are considereed and teachers' feature maps are compared to students' feature maps.
I view this paper as building an auto-encoder between the teachers' feature maps and the students' feature maps.
So knowledge is highly 'distilled' in the auto-encoder's hidden dimension.

* * *

## Novel Structures

#### 1. **SplitNet: Learning to Semantically Split Deep Networks for Parameter Reduction and Model Parallelization**

**Review**([Paper link](https://arxiv.org/abs/1612.01064))

This paper proposed a technique that splits a network into a number of sub-networks
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

**Review**([Paper link]())

This theoretical paper presents a learning framework that works with any compression techniques.
The basic idea is to use augmented Lagrangian and alternating optimization.
Two alternating losses are proposed and represents learning the model and learning the compression respectively.

#### 6. Learning Versatile Filters for Efficient Convolutional Neural Networks.

**Review**([Paper link]())(NIPS 2018)

The idea is to derive a varity of secondary filters from primary filters, so that once computation is unfolded the capacity of neural network increases.
For example, given a primary filter of 5\*5, its secondary filters can be 3\*3 and 1\*1.
So each channel now might have been associated with different filters, but the generated feature volume remains its shape.
This is equivalent to explore the design flexibility in output feature map dimension.
The results are promising, but this leaves a auto-ml question of what versatile filters to use?

#### 7. ChannelNets: Compact and Efficient Convolutional Neural Networks via Channel-Wise Convolutions

**Review**([Paper link]())(NIPS 2018)

This paper proposes a network type, that makes use
of grouped channel-wise convolutions that have fewer connections.
This type of convolution then proves to give better performance compared to mobilenets.
