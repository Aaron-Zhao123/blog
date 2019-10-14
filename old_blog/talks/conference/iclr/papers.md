# Talks

1. Slalom: Fast, Verifiable and Private Execution of Neural Networks in Trusted Hardware
    * Use cryptographic protocols to securely outsource all linear layers from enclaves to GPUs.
    * Make sure enclave data cannot be changed, only exchange encrypted activations.

2. Learning to Remember More with Less Memorization
    * Memory based networks use neural controller and an external memory.
    * Memory can be important because of temporal relations and sparse accesses over large memory
    * Define states (h) as a function of inputs (x), if dh/dx tends to zero, this means no memorization!
    * Increase number of memory slots -> sequence are long -> not practical.
    * Organize the write sequencing.

3. ImageNet-trained CNNs are biased towards texture; increasing shape bias improves accuracy and robustness
    * Use style transfer to change texture
    * ImageNet-trained CNNs are strongly biased towards recognising textures rather than shapes
    * When trained on different datasets, CNNs can have a shape bias instead of a texture bias
    * 5% increase in VOC using a shape-biased ResNet50
    * Human are shape-biased rather than texture biased

4. Deterministic Variational Inference for Robust Bayesian Neural Networks
    * Bayesian Neural Network uses Variational Bayes which variantionally approximate posterior
    * Monte Carlo Variantional Inference which has large gradient variance: sample for weights and generate a set of activations. Calculate expectation based on the sampling.
    * Instead of propagating uncertainties via samples, the authors propose to deterministically propagate distributions. This calculation has to be approximated.
    * There is a KL divergence term to solve, they used emperical bayes for prior tunning.

5.  Pay Less Attention with Lightweight and Dynamic Convolutions
    * Many neural translation works have used self-attentions, which gained a large accuracy increase.
    * Use dynamic convolution and outperformed atttention based networks.
    * Reduce params by using depthwise convolution and weights sharing, they call this lightweight conv
    * The weights of convolutions are deduced from the inputs (!?), which they call a dynamic conv

6. Ordered Neurons: Integrating Tree Structures into Recurrent Neural Networks
    * Assumption is that all languages has a latent tree-like structure

8. Transferring knowledge across learning progresses
    * learning process approximates a curve in the loss surface
    * Some points in the middle of the training trajectory of task A might be beneficial for task B
    * These points are aggregated on line to pull forward the gradients together
    * Fine-tuning is better if number of tasks are low, but suffers if number of tasks increase


# Posters

1. Graph Hypernetworks for Neural Architecture Search

A neural network architecture is randomly sampled, which forms a graph.
After graph propagation, the graph nodes pass to an MLP and generate weights.
My understanding is that, they have a supernet, then randomly sample
from the supernet. What then happens is the graph network takes the
samples to generate weights for the sampled architecture.
Then the whole thing is SGDed.

This becomes rather confusing, because there exists a random sampling
and prior art (uniform sampling nas) showed this sort of operations
should be unnecessary.

2. Learnable Embedding Space for Efficient Neural Architecture Compression

The general idea is to map network architectures to a latent embedding
space and generate a more efficient architecture from the embedding.
They embeddings are from a Bi-LSTM, and they build an RBF kernel of the BO
using the embeddings. The BO then produces a sampled posterior.
During training, the posterior provides its negative log probability
into the cost function so that the LSTM gets educated.
However, the results do not look promising to me in comparison to many
other knowledge distillation works.

3. Learning To Solve Circuit-SAT: An Unsupervised Differentiable Approach

Use neural networks to solve circuit satisfiability problems.
The SAT problem is that given a boolean expression, find an assignment
of the input variables so that the output is true; if it is
not solvable, it should be labled as UNSAT.
They use recurrent structures and the training procedure somehow is similar
to reinforcement learning since it has an exploration factor.

4. Overcoming Catastrophic Forgetting for Continue Learning via Model Adaption

Learning multiple tasks sequentially might suffer from catastrophic forgetting.
Continual Learning now becomes a topic under this assumption.
Current continual learning method replays previous data from a learned
noisy data generator.
The data generator can be viewed as a trained embedding on the input
datasets.
The authors now propose to have the data generator also generates parameters
for the classifier, they consider these generated (dynamic) parameters
as task-specific parameters. Meanwhile, they maintained some layers that
are shared among different tasks (static rather than dynamic).

5. Learning to learn without Forgetting by Maximizing Transfer and Minimizing Interference

Same setup as the continual learning problem. A network is good if it can
preserve the past knowledge and rapidly learn the current experience.
The goal becomes to maximize transfer and minimize interference,
if we could maximize the dot products between gradients at different points,
it would directly encourage the network to share parameters where gradient directions
align and keep parameters separate where interference is caused by gradients in opposite directions.
They offered this regularization in their paper, combining the regularization
with meta-learning algorithms and experience replay.

6. Diversity is All you Need: Learning Skills without a Reward Function
The authors propose to learn skills by maximizing an information theoretical
objective using a maximum entropy policy. Unsupervised discovery of
skills can serve as an effective pretraining for all downstream tasks.
In order to acquire skills that are useful, one must train the skills to
maximize coverage over a set of possible behaviors. From the maximum
entropy policy, they can “push” the skills away from each other,
making each skill robust to perturbations and effectively exploring
the environment.

7. ProxQuant: Quantized Neural Networks via Proximal Operators
When training a quantized model, what we do is to perform low-bitwidth
inference and backprop to the real value tensor. The authors
suggest such gradients are not necessarily correct.
Their quantization method performs gradient upates on current real
values, followed by a prox step to push the value towards quantized values.
They treat quantization as a projection, and formed a less aggressive
proximal projection. They additionally push the weights to the quantized value by very
small amounts after each SGD step, and also has quantization inducing regularizations.
The experiments are a little limited though.

8. Per-Tensor Fixed-Point Quantization for the Back-Propagation Algorithm
This work proposes a systematic methodology to obtain close-to-minimum
per-layer precision requirements of an fixed-point network
that guarantees statistical similarity with full precision training.
They will have to assume a fully trained floating-point baseline exists (which is a very strange assumption).
I mean, then the constraints are easy to obtain, because now one can estimate
from what are the smallest gradients, what are the smallest activations and so on...
This is a very strange paper...

9. SNIP: Single-shot Network Pruning based on Connection Sensitivity.
Basically, they prune at initialized weights at the start of training and
trained the network to convergence.
My intuition is that when pruning rate is not high, so you can do whatever you want?

10. Double viterbi: Weight Encoding for High Compression Ratio and Fast On-chip Reconstruction for Deep Neural Network
The work is mostly on encoding. Sequentially decoding is slow
in their pruning format because it means assigning each non-zero
value to its corresponding index (sequentially counting ones).
What they did is to both encode weight value and indexes so that
parallel decoding is possible.
There is also a discussion in further improving encoding efficiency by
treating zeroed weights as dont cares.

11. Rethink the Value of Network Pruning
This is an emperical study.
1) training a large, over-parameterized model is often not necessary to obtain an efficient final model
2) learned important weights of the large model are typically not useful for the small pruned model
3) the pruned architecture itself, rather than a set of inherited important weights,
is more crucial to the efficiency in the final model,
which suggests that in some cases pruning can be useful as an architecture search paradigm.

12. Relaxed Quantization for Discetized Neural Networks
The proposed relatex quantization transforms
continuous distributions of weights to categorical distribution over
quatnized levels, so that it is differentiable.

13. Slimmable Neural Networks
shared before

14. Learning Recurrent Binary/Tenary Weights
Plain binarization fails on LSTMs, the authors empirically
observed that input and output gates tend to let all information through
and g gate blocks all information.
The authors then measured the activations on the input side before
non-linear functions are applied and observed that binarization changes
the pdf during training. They thus applied batch normalization to
amortize this effect, the intuition is that batch normalization is commonly
applied to a layer where changing its parameters affects
the distributions of the inputs to the next layer.
They simply implemented batch-normed LSTMs are found that they perform
better when they are binarized.

15. Accumulation Bit-Width Scaling for Ultra-Low Precision Training of Deep Neural Networks
This works focuses training on floating-point arithmetic. They make the observation
that quantization loss introduced in the training process is related to the
accumulation length (number of values got accumulated). First, weights updates
on the backward pass is most sensitive to this error since it has the greatest
number of values to be summed. They formulate a statistical
relationship between this accumulation width and a handmade metric called VRR.
From the computed VRR with a given precision, one can check how close it is
to its theoretical upper-bound (1) to know before training what is a suitable accumulation precision.
In this case, this VRR value becomes another hyper-parameter to pick, just like the bitwidth.

16. Integer Networks for Data Compression with Latent-Variable Models.
This paper simply puts all values to integer numbers. The motivation is very
different, it basically considers utilizing a model on different platforms with own numerical round-offs
and try to eliminate differences by asking all of them to do integer arithmetics.
An interesting thing is in the poster session, these Goolge chaps said that
they can train a network with channel-wise learnable scaling only and avoids
using any batch normalizations.


17. Lottery Ticket
shared before

18. ProxylessNas
shared before

19. DARTs
shared before


