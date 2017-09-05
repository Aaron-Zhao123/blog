---
layout: default
---

# [](#list) List of papers
  1. **DSD:  DENSE-SPARSE-DENSE Training For Deep Neural Network**
  2. **Understanding deep learning requires rethinking generalization**
  3. **Accurate, Large Minibatch SGD:Training ImageNet in 1 Hour**
  4. **Revisiting Unreasonable Effectiveness of Data in Deep Learning Era**

* * *

## <a id="Training Methods"></a>Training

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
#### **4. Revisiting Unreasonable Effectiveness of Data in Deep Learning Era**
