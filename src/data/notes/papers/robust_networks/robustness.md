
# [](#list) Adversarial Robustness

## [](#list) List of papers

  1. Defense-GAN: Protecting Classifiers Against Adversarial Attacks Using Generative Models

  2. Stochastic Activation Pruning for Robust Adversarial Defense

  3. Model Compression with Adversarial Robustness: A Unified Optimization Framework

#### **1. Defense-GAN: Protecting Classifiers Against Adversarial Attacks Using Generative Models** (ICLR 2018)

*Review* ([Paper link](https://arxiv.org/abs/1801.02613))

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

#### **2. Stochastic Activation Pruning for Robust Adversarial Defense** (ICLR 2018)

*Review* ([Paper link])

SAP prunes a random subset of activations (preferentially pruning those with smaller magni- tude) and scales up the survivors to compensate.

#### 3. Model Compression with Adversarial Robustness: A Unified Optimization Framework (NeurIPS 2019)

*Review* ([Paper link])

The paper provides a math formulation of given certain compression
budget, how do I perform adversarial training.
The optimization surface is complicated and they used ADMM to
split these constraints by duplicating the optimization variable.
They claim a proper joint optimisation like this can help
compressed models to maintain almost the same accuracy and robustness compared to the original one.
