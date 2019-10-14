1. Serving Recurrent Neural Networks Efficiently with a Spatial Accelerator

RNNs have complex dataflow and varying size for different problems. BLAS-level abstraction leads to inefficient utilization of mult-add units, the idea is to use more fine-grained loop tiling to saturate compute. In addition, the tiling happens at the hidden unit dimension, so that on-chip buffer size is minimized. LSTMs costs a lot of on-chip buffer because they have many element-wise operations (roughly 20 element-wise ops) after Matrix Multiplications. Using a tiled process, this requirement for on-chip buffering element-wise computations are minimized. Lastly, they suggest that it is easier to overlap pipelines if computes happen in a finer-granularity.
At the end, they propose a CGRA that is at 28nm node and show persistent a high FLOPs utilization compared to Microsoft's Brainwave.

2. Restructuring Batch Normalization to Accelerate CNN Training

It is well-known that BN can be fused in the inference run. They break-down BN to two parts, the first part is the mean-std generation part and fused to the convolution , they also fuse the second part which is the normalization part to the ReLU layer. Instead of having a complete BN layer that requires batched-activation size of main memory access, now these fused layers only need to pass the gradients of mean and std of BN and thus saved a lot of main memory accesses. It is somehow very neat.

3. Mini-batch Serialization: CNN Training with Inter-layer Data Reuse

Mini-batch increases data parallelism but requires large buffer space. Feeding a sub-batch (a fraction of images in a batch) might fit the on-chip memory. They first profile buffer requirement of different layers and merge certain layers to max-out on-chip memory utilization. The point is that later layers normally have smaller feature spaces and thus more layers can be grouped. To avoid syncing of data inside a mini-batch, they propose to group normalization instead.

4. Full Deep Neural Network Training on a Pruned Weight Budget

Since parameters that have accumulated in the highest total
gradients account for most of the learning, they propose to
only keep track on a subset of weights that have high gradients.
The interesting fact that, they find you can't set weights that
are not important to zero because it destroys training. Instead,
you can randomly generate these weights using a random number
generator on-the-fly in the hardware. On ResNet18, they can reduce the
weights budget by 11x without affecting training quality.
