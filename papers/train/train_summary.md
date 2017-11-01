---
layout: default
---

# [](#list) List of papers
  * Training [details](#Training)
  1. **DSD:  DENSE-SPARSE-DENSE Training For Deep Neural Network**
  2. **Understanding deep learning requires rethinking generalization**
  3. **Accurate, Large Minibatch SGD:Training ImageNet in 1 Hour**
  4. **Revisiting Unreasonable Effectiveness of Data in Deep Learning Era**

  * New Models/Concepts [details](#concepts)
  1. **Dynamic Routing Between Capsules**
  2. **Generative Adversarial Networks: An Overview**
  3. **Diffusion-Convolutional Neural Networks**
  4. **Sparse Diffusion-Convolutional Neural Networks**


* * *

## <a id="Training"></a>Training

#### **1. DENSE-SPARSE-DENSE Training For Deep Neural Network**
**Review**([Paper link](https://arxiv.org/pdf/1607.04381.pdf))
This paper suggest that training in a dense->sparse->dense fashion provides
better results.
Because important weights can be found in the pruning phase, the second
dense process reactivates other unimportant weights to learn to adapt with important weights.

#### **2. Understanding deep learning requires rethinking generalization**
**Review**([Paper link](https://arxiv.org/abs/1611.03530))
This paper trained a network with data that has completely random labeling.
In this case, the network is able to obtain zero training error which proves: 1. network can memorize the entire dataset because of the large number of parameters it has. 2. Noise can be embraced by the network in a brute-force manner.

#### **3. Accurate, Large Minibatch SGD:Training ImageNet in 1 Hour**

**Review**([Paper link](https://research.fb.com/wp-content/uploads/2017/06/imagenet1kin1h5.pdf))
Using synchronous SGD to train is very popular in distributed computing.
The problem is, if giving a large minibatch to each GPU, the neural network model loses its generalization and thus has worse accuracy.
This paper proposes a linear relationship between learning rate and batch size: for using a larger batch per GPU, learning rate has to increase linearly as well.
At early stage of training, to enable the linear scaling of learning rate, the network has to perform "warmup": ramps up the learning rate from small to large in the first few epochs.

#### **4. Revisiting Unreasonable Effectiveness of Data in Deep Learning Era** (ICCV2017)
**Review**([Paper link](https://arxiv.org/pdf/1707.02968.pdf))
This paper describes three trends:
1. Model size has decreased but number of layers keep inreasing
2. GPU/hardware power keeps increasing
3. Dataset size stays constant!

The paper tested some popular CNN models on datasets that are 10x or 100x bigger
than ImageNet. They mainly focus on JFT-300M.
The  JFT-300M  dataset  is closely related and derived from the data which powers
the Image Search. In this version, the dataset has 300M images and 375M labels,  on average each image has 1.26 labels.These images are labeled with 18291 categories. They found:

1. Performance on vision increases requires exponential increase of volume of
training data size.
2. Representation learning (or pre-training) still holds a lot of promise.
One can improve performance on many vision tasks by just training from a better
base model.  
3. Build larger datasets.

* * *

## <a id="concepts"></a>New Models/Concepts

#### **1. Dynamic Routing Between Capsules** (NIPS2017)
**Review**([Paper link](https://arxiv.org/abs/1710.09829v1))
The problem of current neural networks is that pooling is a bad way of dealing
with viewpoints. Current neural networks work by making viewpoints
invariant during learning. The argument is that dynamic routing is required
for learning from different view points.
A capsule is a set of neurons whose activity vectors represents the 'instantiation
parameters'. Active capsules at one level make predictions, via transformation
matrices, for the instantiation parameters of higher-level capsules.
When multiple predictions agree, a higher level capsule becomes active.
This is basically saying multiple subnetworks can be stacked together to serve
the next layer.
Dynamic routing mechanism to ensure that the output of the capsule gets sent to an appropriate parent in the layer above.
For each possible parent, the capsule computes a “prediction vector” by multiplying its output by a weight matrix.
If this prediction vector has a large scalar product with the output of a possible parent, there is top-down feedback which has the effect of increasing the coupling coefficient for that parent and decreasing it for other parents.
This increases the contribution that the capsule makes to that parent thus further increasing the scalar product of the capsule’s prediction with the parent’s output.
This type of “routing-by-agreement” should be far more effective than the very primitive form of routing implemented by max-pooling which allows neurons in one layer to ignore all but the most active feature detector in a local pool in the layer below.  


#### **2. Generative Adversarial Networks: An Overview**
**Review**([Paper link](https://arxiv.org/abs/1710.07035v1))
Fig 2 is interesting in the sense that it views generator as producing a distribution that is slightly different from the real data distribution.
For an appropriately parametrized and trained GAN, these two distributions are nearly identical.
GAN training is very challenging because:
1. Difficult to converge.
2. The generative model might collapse, meaning that it generates very similar samples for various inputs.
3. Discriminator loss converges quickly to zero and provide no updates to the generator.

#### **3. Diffusion-Convolutional Neural Networks**
**Review**([Paper link](https://arxiv.org/abs/1511.02136))
Diffusion-Convolutional Neural Networks(DCNN) is a new model for graph-structured
data.
The network is designed to classify noes or edges or graphs.
The diffusion action transfer any given inputs (nodes, edges or graphs) into
a formalized input to neural network (Number of nodes * number of features).
Their experiments show how to classify nodes in a graph and how to classify
different graphs.

#### **4. Sparse Diffusion-Convolutional Neural Networks**
**Review**([Paper link](https://arxiv.org/abs/1710.09813v1))
One problem of DCNN is the memory overhead since it considers all nodes in a
graph. This directly meets a scaling problem. The solution this paper proposed
is to use a threshold to make the network sparse.
