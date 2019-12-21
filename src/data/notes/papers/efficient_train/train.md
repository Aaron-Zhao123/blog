## [](#list) List of papers

  * Distributed Learning

  1. Communication-Efficient Distributed Learning via Lazily Aggregated Quantized Gradients
  2. Double Quantization for Communication-Efficient Distributed Optimization

* * *

## Distributed Learning

#### 1. Communication-Efficient Distributed Learning via Lazily Aggregated Quantized Gradients (NeurIPS 2019)

**Review** ([Paper link])

Aggregated SGD algorithm seems very error-tolerating, the key
idea of this paper is to first quantize the computed gradients, and then skip less informative quantized gradient communications by reusing outdated gradients.

Consider a server with multiple workers, at each round of feeding
information to uplink, only a subset of the workers are selected
based on their quantized gradients, the other workers use the old
copy of their gradients.

#### 2. Double Quantization for Communication-Efficient Distributed Optimization (NeurIPS 2019)

**Review** ([Paper link])

This paper proposes a method to quantize not only the gradients
for uplink communication but also the model parameters for
downlink.
The quantization bitwidth is controlled by some arbitrary hyper-parameter
that is not known before train time.
