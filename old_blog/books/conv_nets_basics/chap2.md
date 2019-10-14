---
layout: default
---
# Chapter 2: Back Propagation and Stochastic Gradient Descent
## Back Propagation
Consider finding (dE/dw), using chain rule, this becomes dE/dw = dE/dy * dy/dy' * dy'/dw.
This case, dE/dy is the loss function's derivative E = 1/2(target - y)^(2).
dy/dy' is the activation function, where y' is the previous layer's output y = 1/(1+e(-y')).
Finally, y' = w1x1 + w2x2 + ... wnxn.
[Details](https://mattmazur.com/2015/03/17/a-step-by-step-backpropagation-example/)

## Stochastic Gradient Descent (SGD)
Batch methods, such as limited memory BFGS, which use the full training set to compute the next update to parameters at each iteration tend to converge very well to local optima. They are also straight forward to get working provided a good off the shelf implementation (e.g. minFunc) because they have very few hyper-parameters to tune. However, often in practice computing the cost and gradient for the entire training set can be very slow and sometimes intractable on a single machine if the dataset is too big to fit in main memory. Another issue with batch optimization methods is that they don’t give an easy way to incorporate new data in an ‘online’ setting. Stochastic Gradient Descent (SGD) addresses both of these issues by following the negative gradient of the objective after seeing only a single or a few training examples. The use of SGD In the neural network setting is motivated by the high cost of running back propagation over the full training set. SGD can overcome this cost and still lead to fast convergence.
