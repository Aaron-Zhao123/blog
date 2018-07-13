## Emerging Techniques for Constrained-Resource Deep Learning

* InceptionV3 and ResNet50 nearly has no accuracy loss.


1. Post-training quantization: Train using floats as normal, quantize down
without more training.
2. After transformations only: just linear transformations between integers,
any look-up is hard to perform.
3. Symmetric: real range goes from -max to +max, with zero as 0.0.
4. Asymmetric: Real range goes from arbitrary min to max, this uses the integer
codes more efficiently.
5. Per-Channel: Each convolution filter has its own range.


#### Training Techniques
1. Stochastic quantization underperforms deterministic quantization
2. EMA of weights may underperform instantaneous estimates.


#### Model architectures
1. It was better to use RELU rather than RELU6
2. Aggressive operator fusion: reduces memory accesses
3. Compressed memory access: optimize memory bandwidth by supporting
on-the-fly de-compression of weights
4. Low-precision arithmetic



#### Question
1. Stochastic training
2. Dynamic fixed point
3. Dataformat compression
4. Noise injection
5. Zero-aware 
