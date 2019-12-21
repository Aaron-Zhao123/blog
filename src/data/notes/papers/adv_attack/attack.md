# [](#list) Adversarial Attacks

## [](#list) List of papers

  1. Characterizing Adversarial Subspaces Using Local Intrinsic Dimensionality

#### **1. Characterizing Adversarial Subspaces Using Local Intrinsic Dimensionality** (ICLR 2018)

*Review* ([Paper link](https://arxiv.org/abs/1801.02613))

This paper presents a new estimator called Local Intrinsic Di- mensionality (LID)
for detecting adversarial examples.
Each adversarial example can be regarded as being surrounded by a connected
region of the domain (the ‘adversarial region’ or ‘adversarial subspace’)
within which all points subvert the classifier in a similar way.
There are several similar estimations, such as kernel density (KD) and k-mean
density.
A classifier can be trained by using the training data to construct features
for each sample, based on its LID within a minibatch of samples across
different layers, where the class label is assigned positive for adversarial
examples and assigned negative for normal and noisy examples.
To compute the LID, you need to fetch the per layer outputs.

