---
layout: default
---

# [](#list) List of papers

1. A Linear Speedup Analysis of Distributed Deep Learning with Sparse and Quantized Communication
2. GradiVeQ: Vector Quantization for Bandwidth-Efficient Gradient Aggregation in Distributed CNN Training

***

1. A Linear Speedup Analysis of Distributed Deep Learning with Sparse and Quantized Communication
**Review**([Paper link]())(NeuralIPS2018)
This paper studies the convergence raet of distributed SGD with sparsed and quantized communications.
The proposed using periodic quantized averaged SGD, which only syncs the model paramters every p iterations.
The idea is to communicate the quantized changes of model parameters on every p iterations.

2. GradiVeQ: Vector Quantization for Bandwidth-Efficient Gradient Aggregation in Distributed CNN Training
**Review**([Paper link]())(NeuralIPS2018)
Decentralized training might use ring all-reduce archeitecture where all servers receive gradients in a circular order.
This paper proposes to use PCA to compress gradientt vectors since gradient vectors show linear correlations across training iterations.
The problem they proposed that RAR makes quantization and compression harder is somehow not true in my own consideration.
There are many methods, such as error-feedback, that deals with quatization errors locally instead of blowing off the numerical range.
