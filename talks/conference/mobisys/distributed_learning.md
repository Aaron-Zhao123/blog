## Overcoming the Challenges of Distributed Learning

Setup:
A single centralized master to allocate gradient computations to a
number of workers.

* Wider networks are more amenable to fast large-batch training
* Quantization for lower communication costs
* QSGD: communication-efficient SGD via Gradient Quantization and Encoding: the idea is quantize and sparsify gradients
* ATOMO: atomic decomposition on gradients, sparsify the atoms using importance sampling.
