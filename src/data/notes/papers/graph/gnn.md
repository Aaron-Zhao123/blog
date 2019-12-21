# [](#list) List of papers

* Graph Convolutions
    1. Convolutional Neural Networks on Graphs with Fast Localized Spectral Filtering
    2. Semi-supervised Classification with Graph Convolutional Networks
    3. Representation Learning on Graphs with Jumping Knowledge Networks

* Graph Attention
    1. Understanding Attention and Generalization in Graph Neural Networks

* * *

## Graph Convolutions

#### 1. Convolutional Neural Networks on Graphs with Fast Localized Spectral Filtering

**Review**([Paper link]())

CNNs extract the local stationarity property of the input data or signals
by revealing local features.
User data on social networks, gene data on biological regulatory networks, log data on telecommunication networks, or text documents on word embeddings are important examples of data lying on irregular or non-Euclidean domains that can be structured with graphs, which are universal representations of heterogeneous pairwise relationships.

The learning power of spatial convolution on graphs is ill-defined, this
paper proposes to perform convolution in the spectral domain.
However, the non-parametric filters in the fourier domain is full ranked, and
thus they propose to use Chebyshev coefficients for an approximation.

#### 2. Semi-supervised Classification with Graph Convolutional Networks (ICLR 2017)

**Review**([Paper link]())

The paper consider the problem of classifying nodes (such as documents) in a graph (such as a citation network), where labels are only available for a small subset of nodes.
They introduced the Graph Convolutions (GCN), concatenating layers
for classification tasks.

#### 3. Representation Learning on Graphs with Jumping Knowledge Networks

**Review**([Paper link]())

The range of “neighboring” nodes that a node’s representation draws from strongly depends on the graph structure, analogous to the spread of a random walk.
The authors proposed a method of shortcutting connections across layers
to help information to propagate.

***

## Graph Attention

#### 1. Understanding Attention and Generalization in Graph Neural Networks (NeurIPS 2019)

**Review**([Paper link]())

The first observation the authors made is that graph pooling
can be viewed as a similar operation to graph attention.
They also found that under typical conditions the effect of attention is negligible or even harmful, but under certain conditions it provides an exceptional gain in performance.
Their proposed weakly supervised model training is to instantiate
graph attention on each node by looking at how a trained model
(without any attentions) performs at N-1 nodes.
The found difference is then used to initialize the node attention.
