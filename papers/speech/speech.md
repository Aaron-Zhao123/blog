---
layout: default
---

# [](#list) List of papers
  * Conditional Computations [details](#inference)

  Various forms of conditional computation have been proposed as a way to increase model capacity without a proportional increase in computational costs.
  In these schemes, large parts of a network are active or inactive on a per-example basis.
    1. Outrageously large neural networks:
the sparsely-gated mixture-of-experts layer
    2. Language Modeling with Gated Convolutional Networks
    3. Multi-mention Learning for Reading Comprehension with Neural Cascades
* * *

## <a id="train"></a> Conditional Computations
#### 1. Outrageously large neural networks: the sparsely-gated mixture-of-experts layer
**Review**([Paper link](http://jaewoong.org/pubs/fpga17-next-generation-dnns.pdf))

The MoE consists of a number of experts, each a simple feed-forward neural network, and a trainable gating network which selects a sparse combination of the experts to process each input.
The authors have observed that the gating network tends to converge to a state where it always produces large weights for the same few experts. This imbalance is self-reinforcing, as the favored experts are trained more rapidly and thus are selected even more by the gating network.
Defining a soft constraint (another loss term into the cost function) can help avoiding this local minimum.



#### 2. Language Modeling with Gated Convolutional Networks
 <!-- **Review**([Paper link]()) -->
 I did not fully understand the paper, a later review after reading on LSTMs is required.
 The paper proposed a new gating mechanism.
 The authors claim their gated linear units reduce the vanishing gradient problem for deep architectures by providing a linear path for the gradients while retaining non-linear capabilities

#### 3. Multi-mention Learning for Reading Comprehension with Neural Cascades
**Review**([Paper link](https://arxiv.org/abs/1711.00894))
Reading comprehension is a task of answering questions based on a set of
documents. Long short-term memory networks (LSTM) 
