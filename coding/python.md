---
layout: default
---

# [](#ml) Machine Learning APIs
## [](#slim) [TFSlim](https://github.com/tensorflow/tensorflow/tree/master/tensorflow/contrib/slim)
* Multi-GPU Training: [Cifra10 Example](https://github.com/tensorflow/tensorflow/blob/r0.7/tensorflow/models/image/cifar10/cifar10_multi_gpu_train.py), [Inception Example](https://github.com/tensorflow/models/blob/master/inception/README.md#getting-started)
* [TFSlim walk through](https://github.com/tensorflow/models/blob/master/slim/slim_walkthrough.ipynb)
* [Pretrained models](https://github.com/tensorflow/models/tree/master/slim): shown in the table below

Model | TF-Slim File | Checkpoint | Top-1 Accuracy| Top-5 Accuracy |
:----:|:------------:|:----------:|:-------:|:--------:|
[Inception V1](http://arxiv.org/abs/1409.4842v1)|[Code](https://github.com/tensorflow/models/blob/master/slim/nets/inception_v1.py)|[inception_v1_2016_08_28.tar.gz](http://download.tensorflow.org/models/inception_v1_2016_08_28.tar.gz)|69.8|89.6|
[Inception V2](http://arxiv.org/abs/1502.03167)|[Code](https://github.com/tensorflow/models/blob/master/slim/nets/inception_v2.py)|[inception_v2_2016_08_28.tar.gz](http://download.tensorflow.org/models/inception_v2_2016_08_28.tar.gz)|73.9|91.8|
[Inception V3](http://arxiv.org/abs/1512.00567)|[Code](https://github.com/tensorflow/models/blob/master/slim/nets/inception_v3.py)|[inception_v3_2016_08_28.tar.gz](http://download.tensorflow.org/models/inception_v3_2016_08_28.tar.gz)|78.0|93.9|
[Inception V4](http://arxiv.org/abs/1602.07261)|[Code](https://github.com/tensorflow/models/blob/master/slim/nets/inception_v4.py)|[inception_v4_2016_09_09.tar.gz](http://download.tensorflow.org/models/inception_v4_2016_09_09.tar.gz)|80.2|95.2|
[Inception-ResNet-v2](http://arxiv.org/abs/1602.07261)|[Code](https://github.com/tensorflow/models/blob/master/slim/nets/inception_resnet_v2.py)|[inception_resnet_v2_2016_08_30.tar.gz](http://download.tensorflow.org/models/inception_resnet_v2_2016_08_30.tar.gz)|80.4|95.3|
[ResNet 50](https://arxiv.org/abs/1512.03385)|[Code](https://github.com/tensorflow/models/blob/master/slim/nets/resnet_v1.py)|[resnet_v1_50_2016_08_28.tar.gz](http://download.tensorflow.org/models/resnet_v1_50_2016_08_28.tar.gz)|75.2|92.2|
[ResNet 101](https://arxiv.org/abs/1512.03385)|[Code](https://github.com/tensorflow/models/blob/master/slim/nets/resnet_v1.py)|[resnet_v1_101_2016_08_28.tar.gz](http://download.tensorflow.org/models/resnet_v1_101_2016_08_28.tar.gz)|76.4|92.9|
[ResNet 152](https://arxiv.org/abs/1512.03385)|[Code](https://github.com/tensorflow/models/blob/master/slim/nets/resnet_v1.py)|[resnet_v1_152_2016_08_28.tar.gz](http://download.tensorflow.org/models/resnet_v1_152_2016_08_28.tar.gz)|76.8|93.2|
[ResNet V2 200](https://arxiv.org/abs/1603.05027)|[Code](https://github.com/tensorflow/models/blob/master/slim/nets/resnet_v2.py)|[TBA]()|79.9\*|95.2\*|
[VGG 16](http://arxiv.org/abs/1409.1556.pdf)|[Code](https://github.com/tensorflow/models/blob/master/slim/nets/vgg.py)|[vgg_16_2016_08_28.tar.gz](http://download.tensorflow.org/models/vgg_16_2016_08_28.tar.gz)|71.5|89.8|
[VGG 19](http://arxiv.org/abs/1409.1556.pdf)|[Code](https://github.com/tensorflow/models/blob/master/slim/nets/vgg.py)|[vgg_19_2016_08_28.tar.gz](http://download.tensorflow.org/models/vgg_19_2016_08_28.tar.gz)|71.1|89.8|
[MobileNet_v1_1.0_224](https://arxiv.org/pdf/1704.04861.pdf)|[Code](https://github.com/tensorflow/models/blob/master/slim/nets/mobilenet_v1.py)|[mobilenet_v1_1.0_224_2017_06_14.tar.gz](http://download.tensorflow.org/models/mobilenet_v1_1.0_224_2017_06_14.tar.gz)|70.7|89.5|
[MobileNet_v1_0.50_160](https://arxiv.org/pdf/1704.04861.pdf)|[Code](https://github.com/tensorflow/models/blob/master/slim/nets/mobilenet_v1.py)|[mobilenet_v1_0.50_160_2017_06_14.tar.gz](http://download.tensorflow.org/models/mobilenet_v1_0.50_160_2017_06_14.tar.gz)|59.9|82.5|
[MobileNet_v1_0.25_128](https://arxiv.org/pdf/1704.04861.pdf)|[Code](https://github.com/tensorflow/models/blob/master/slim/nets/mobilenet_v1.py)|[mobilenet_v1_0.25_128_2017_06_14.tar.gz](http://download.tensorflow.org/models/mobilenet_v1_0.25_128_2017_06_14.tar.gz)|41.3|66.2|

^ ResNet V2 models use Inception pre-processing and input image size of 299 (use
`--preprocessing_name inception --eval_image_size 299` when using
`eval_image_classifier.py`). Performance numbers for ResNet V2 models are
reported on ImageNet valdiation set.

All 16 MobileNet Models reported in the [MobileNet Paper](https://arxiv.org/abs/1704.04861) can be found [here](https://github.com/tensorflow/models/tree/master/slim/nets/mobilenet_v1.md).

To read out the values of parameters in a checkpoit model, the following python script should work:

```python
"""
ref:
1. https://stackoverflow.com/questions/40118062/how-to-read-weights-saved-in-tensorflow-checkpoint-file
2. https://www.tensorflow.org/s/results/?q=freezegraph&p=%2F

Loading meta only might not work.
If the checkpoint contains:
model.ckpt.meta
model.ckpt.index
model.ckpt.data-XXXX

model_name = model.ckpt

If the checkpoint only contains model.ckpt
model_name = model.ckpt


Checked on inceptionv3 and mobilenet
"""

from __future__ import absolute_import
from __future__ import division
from __future__ import print_function

import argparse
import sys

import numpy as np

from tensorflow.python import pywrap_tensorflow
from tensorflow.python.platform import app
from tensorflow.python.platform import flags

model_name = "mobilenet_v1_1.0_224.ckpt"
reader = pywrap_tensorflow.NewCheckpointReader(model_name)
var_to_shape_map = reader.get_variable_to_shape_map()
for key in sorted(var_to_shape_map):
  print("tensor_name: ", key)
  print(reader.get_tensor(key))

```
