# Gradient-based NAS

## [](#list) List of papers

    1. Learning Transferable Architectures for Scalable Image Recognition
    2. Network Pruning via Transformable Architecture Search
    3. SpArSe: Sparse Architecture Search for CNNs on Resource-Constrained Microcontrollers
    4. Constrained deep neural network architecture search for IoT devices accounting for hardware calibration

* * *

#### 1. Learning Transferable Architectures for Scalable Image Recognition

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

#### 2. Network Pruning via Transformable Architecture Search (NeurIPS 2019)

**Review**([Paper link](https://arxiv.org/abs/1707.07012))

Most of the existing pruned networks have the same structure
of the baseline network.
This paper proposes a scheme that multiple unpruned CNNs together
builds a transfer distribution to the smaller network.
Apparently the baseline networks sampled from have various
feature map sizes, so the authors proposed using channel-wise interpolation
to aggregate them.

#### 3. SpArSe: Sparse Architecture Search for CNNs on Resource-Constrained Microcontrollers (NeurIPS 2019)

**Review**([Paper link](https://arxiv.org/abs/1707.07012))

This paper focuses on Tiny models on MCU controllers (KB level).
The proposed method combines NAS with pruning, it is interesting
to see pruning still provides a strong effect in reducing the size
of AutoML models.

#### 4. Constrained deep neural network architecture search for IoT devices accounting for hardware calibration (NeurIPS 2019)

**Review**([Paper link](https://arxiv.org/abs/1707.07012))
