---
layout: default
---

# [](#list) List of papers
  1. Characterizing Adversarial Subspaces Using Local Intrinsic Dimensionality


* * *

## <a id="coarseprune"></a>Yolo

#### **1.Characterizing Adversarial Subspaces Using Local Intrinsic Dimensionality** (ICLR 2018)

**Review**([Paper link](https://arxiv.org/abs/1801.02613))
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

#### **2.DEFENSE-GAN: PROTECTING CLASSIFIERS AGAINST ADVERSARIAL ATTACKS USING GENERATIVE MODELS** (ICLR 2018)
The authors proposes to leverage the representative power of Generative Adversarial Networks (GAN) (Goodfellow et al., 2014) to diminish the effect of the adversarial perturbation, by “projecting” input images onto the range of the GAN’s generator prior to feeding them to the classifier.
The generative model learns a mapping G from a low-dimensional vector 
z ∈ Rk to the high-dimensional input sample space Rn. 
During training of the GAN, G is encouraged to generate samples 
which resemble the training data. 
It is, therefore, expected that legitimate samples will be close to some point 
in the range of G, 
whereas adversarial samples will be further away from the range of G
Furthermore, 
“projecting” the adversarial examples onto the range of the generator G can have the desirable effect of reducing the adversarial perturbation. 
The projected output, computed using Gradient Descent (GD), is fed into the classifier instead of the original (potentially adversarially modified) image. We empirically demonstrate that this is an effective defense against both black-box and white-box attacks on two benchmark image datasets.

#### **3.MagNet: a Two-Pronged Defense against Adversarial Examples**
A very simple idea. Two additional classifiers are used, the first one
detects whether sample is adversarial. The second one fixes adversarial
samples to normal samples.

#### **4.Stochastic ACTIVATION PRUNING FOR ROBUST ADVERSARIAL DEFENSE** (ICLR 2018)
SAP prunes a random subset of activations (preferentially pruning those with smaller magni- tude) and scales up the survivors to compensate. 


#### **5.Adversarial Defense based on Structure-to-Signal Autoencoders**
The authors apply specially trained autoencoders, referred to as S2SNets, as defense mechanism. They follow a two-stage training scheme: first unsupervised, followed by a fine-tuning of the decoder, using gradients from an existing classifier.
S2SNets induce a shift in the distribution of gradients propagated through them, stripping them from class-dependent signal.