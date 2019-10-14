# Tractable MCMC

Speaker: Yian Ma

## Question

How to design computationally tractable and scalable Baysian methods with statistical guarantee (measured in KL divergence)?

## Inferential Approaches

Compute P(D/theta)

* Optimization: point estimate, gradient descent
* Sampling: Langevin Algorithm, gradient descent + random noise; capturing uncertainties

In a strong convex setup, GD is independent from the problem dimension, MCMC scales linearly with problem dimension.

