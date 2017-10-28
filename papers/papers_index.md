---
layout: default
---

# [](#nn)Neural Networks
### [Models](/blog/papers/nn_models/model_summary.html)

A collection of popular neural network models: from the old LeNet model to ResNet model.
Some interesting network architectures are also collected.

### [Compression](/blog/papers/pruning/pruning_summary.html)
A range of compression techniques are summarized:
* Pruning
* Quantization
* Regularization
* Varying network structure

Pruning refers to move away connections in a neural network for compressing the size of it, both fine-grained and coarse-grained
pruning are discussed.
Various quantization methods: fixed-point, dynamic fixed-point, binarized, tenary.
Novel regularizers are considered as compression techniques.

### [ Training and Novel Networks](/blog/papers/train/train_summary.html)
Interesting benchmarks and methods of training neural networks.

### [ Speech models](/blog/papers/speech/speech.html)
Mainly focus on keeping in track with state-of-the-art NLP models.

# Reinforcement learning
How to apply neural networks in other domains.
A collection of Reinforcement learning techniques, although this is not my field.
[link](/blog/papers/nn_app/app_summary.html)

# Neural Network Accelerators
* Inference Accelerators -> aiming at low-power consumption
* Training Accelerators
* Frameworks
Accelerators for low-power systems, and accelerators in the cloud.
[link](/blog/papers/nn_accelerator/acc_summary.html)

# [](#fpga)FPGAs
### [Applications](/blog/papers/fpga_nn/fpgann_summary.html)
My main focus on FPGAs in applications are still related to hardware architectures. This section specifically focus on the publications FPGA-based implementation of neural network accelerators in the following conferences: FPGA, FCCM, FPL and FPT.

### [Cloud](/blog/papers/fpga_cloud/fpgncloud_summary.html)
The interest of FPGAs in the cloud origins from the Catapult project from Microsoft.

### [High level synthesis](/blog/papers/pruning/pruning_summary.html)
I have a particular interest in HLS. The popular HLS tools include the followings: Vivado HLS, Altera OpenCL and Legup.

# [](#others)Networking
## [Scheduling Algorithms](/blog/papers/others/scheduling.html)
My research internship in Microsoft puts a focus on input-buffered switches in data centers

# To Read


#### 7. An exploration of parameter redundancy in deep networks with circulant projections
**Review**([Paper link](https://arxiv.org/abs/1502.03436)

#### 8. Mixture of experts
Choose which channels/subnetworks are most useful for a particular input
http://arxiv.org/abs/1701.06538

#### 9. Measuring catastrophic forgetting
5 techniques to continue training networks on new tasks
http://arxiv.org/abs/1708.02072

#### 10. More detail about the approach which measures sensitivity on particular weights
http://www.pnas.org/content/114/13/3521.full
