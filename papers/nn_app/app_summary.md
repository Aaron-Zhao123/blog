---
layout: default
---

# [](#list) List of papers
  * Learning network structures

    1. Neural Architecture Search with Reinforcement Learning
    2. Learning Transferable Architectures for Scalable Image Recognition

* * *

## <a id="l_acc"></a>Transfer networks

#### 1. Neural Architecture Search with Reinforcement Learning

**Review**([Paper link](https://arxiv.org/abs/1611.01578))
This work uses a recurrent network to generate definitions of a neural network's structure.
The process of generating an architecture stops if the number of layers exceeds a certain value.
This value follows a schedule where we increase it as training progresses.
To accelerate training, they used asynchronous updates by placing multiple controllers
They allow controller to propose skip connections or branching layers, thereby widening the search space.
This skipping is achieved using a  set-selection type attention which was built upon the attention mechanism.
The search space is too large for large datasets, so the experiments are finished on CIFAR-10 only, and even this costs them 800 GPUs.

#### 2. Learning Transferable Architectures for Scalable Image Recognition
**Review**([Paper link](https://arxiv.org/abs/1707.07012))
This paper proposed to automate the process of neural network architecture
by using reinforcement learning to learn model architectures building blocks.
This approach limits the search space and successfully learned building blocks
can be transferred from to large datasets.
They use NAS to search for a good architecture on the far smaller CIFAR-10 dataset, and automatically transfer the learned architecture to ImageNet.
Two types of convolutional cells are considered:
1. Normal cell:
convolutional cells that return a feature map of the same dimension.
2. Reduction cell:
convolutional cells that return a feature map where the feature map height and width is reduced by a factor of two.

The reinforcement learning method asks each hidden sate in the cell to select
from a set of pre-defined operations, and append it to the cell. This action
is repeated multiple times to search for one particular block to append to a
given hidden state of a given cell.
The number of repetition is set to 5 to limit the search space.
The search strategy costs a pool of workers of 500 GPUs.

Note:
"We use a common heuristic to double the number of filters in the output whenever the spatial activation size is reduced in order to maintain roughly constant hidden state dimension."
This is a very interesting statement.
