---
layout: default
---
# Chapter 1: Going back to convolutions
In this chapter, I would like to go back to basic convolution operations --
rewriting them in C++ to help understanding this basic operation.
A graphical illustration is provided [here](http://cs231n.github.io/convolutional-networks/)
by the Stanford Team.


A straightforward implementation is follow the order:

output channels -> input channels -> output_height -> output_width -> kernel_height -> kernel_width

```C++
// output channels
for (int oc = 0; oc < output_channels; oc += 1) {
  // each output channel
  const float *pout = &out[oc];
  for (int ic = 0; ic < input_channels; ic += 1){
    // each input channel
    const float *pin = &in[ic];
    for (int y = 0; y < output_height; y += 1){
      // each line of input channel
      const float *pin_line = pin;
      for (int x = 0; x < output_width; x += 1){
        // each element of each line of input channel
        const float *pin_element = pin_line;
        for (int wy = 0; wy < kernel_height; wy += 1){
          for (int wx = 0; wx < kernel_width; wx += 1) {
            sum += pw[wx] * pin_element[wx];
          }
          // move to next kernel line
          pw += kw;
          // take account of padding
          pin_element += padding_width;
        }
      pout[x] += sum;
      // take account of striding
      pin_line += stride;
      }
      pout += output_width;
      // take account of striding
      pin += stride;
    }
}
```

Another implementation is to stat with output channel first then output width/height and finally input channel, height, width
