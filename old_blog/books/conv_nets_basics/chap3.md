---
layout: default
---
# Chapter 3: Batch Normalization
What BN solves is gradients vanishing.
The operation is to normalize inputs in a per-batch fashion: subtract all
samples by a mean and divide them by the std.
It later applies back a "scale and shift".

Inside a neural network, the "Internal Covariate Shift" accumulates between
each layer and BN reduces this effect.
