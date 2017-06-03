---
layout: default
---
# [](#header-1)Popular CNN Models

| Networks     | Layers| Top1 Error/Top5 Error| Size  | Year |
|:-------------|:------|:---------------------|:------|:-----|
| LeNet5       | 5     | 99.36 on MNIST       | 451KB | 1998 |
| [AlexNet](#alexnet)      | 8     | 40.7/18.2            | 240MB | 2012 |
| [VGG16](#vgg)        | 16    | 27/7.4               | 528MB | 2014 |
| [VGG19](#vgg)        | 19    | 27.3/7.3               | 548MB | 2014 |
| InceptionV1  | 22    | 22/10.07             | 96MB  | 2015 |
| InceptionV3  | 22    | 22/10.07             | 96MB  | 2015 |
| ResNet-50    | 50    | 24.01/7.02           | 102MB | 2015 |
| ResNet-200   | 200   | 21.66/5.79           | 102MB | 2015 |

## [](#alexnet)AlexNet
**Review**([Paper link](http://papers.nips.cc/paper/4824-imagenet-classification-with-deep-convolutional-neural-networks.pdf))
This is an early work of using deep CNN. The tricky parts are the padding sizes and group sizes. Some groups sizes are set to 2 due to the memory limitation of GPU at that time. The model in Caffee Zoo also takes a group count of two.

**Bibtex**
```
@incollection{NIPS2012_4824,
title = {ImageNet Classification with Deep Convolutional Neural Networks},
author = {Alex Krizhevsky and Sutskever, Ilya and Hinton, Geoffrey E},
booktitle = {Advances in Neural Information Processing Systems 25},
editor = {F. Pereira and C. J. C. Burges and L. Bottou and K. Q. Weinberger},
pages = {1097--1105},
year = {2012},
publisher = {Curran Associates, Inc.},
url = {http://papers.nips.cc/paper/4824-imagenet-classification-with-deep-convolutional-neural-networks.pdf}
}
```
## [](#vgg)VGG
**Review**([Paper link](https://arxiv.org/pdf/1409.1556))
VggNet steadily increase the depth by adding more convolutional layers.
A lot of 3-by-3 convolutional filters are utilized.
Normally train with a decaying learning rate and around 70 epochs.

**Bibtex**
```
@article{DBLP:journals/corr/SimonyanZ14a,
  author    = {Karen Simonyan and
               Andrew Zisserman},
  title     = {Very Deep Convolutional Networks for Large-Scale Image Recognition},
  journal   = {CoRR},
  volume    = {abs/1409.1556},
  year      = {2014},
  url       = {http://arxiv.org/abs/1409.1556},
  timestamp = {Wed, 01 Oct 2014 15:00:05 +0200},
  biburl    = {http://dblp.uni-trier.de/rec/bib/journals/corr/SimonyanZ14a},
  bibsource = {dblp computer science bibliography, http://dblp.org}
}
}
```








<!-- # [](#header-2)Citations
<a id='alexnet-paper'>
[1] Alex Krizhevsky, Ilya Sutskever, and Geoffrey E. Hinton. "ImageNet Classification with Deep Convolutional Neural Networks." NIPS 2012

<a id='inception-v1-paper'>
[2] Christian Szegedy, Wei Liu, Yangqing Jia, Pierre Sermanet, Scott Reed,
Dragomir Anguelov, Dumitru Erhan, Andrew Rabinovich.
"Going Deeper with Convolutions." CVPR 2015.

<a id='vgg-paper'>
[3] Karen Simonyan and Andrew Zisserman. "Very Deep Convolutional Networks for Large-Scale Image Recognition." ICLR 2015

<a id='resnet-cvpr'>
[4] Kaiming He, Xiangyu Zhang, Shaoqing Ren, and Jian Sun. "Deep Residual Learning for Image Recognition." CVPR 2016.

<a id='resnet-eccv'>
[5] Kaiming He, Xiangyu Zhang, Shaoqing Ren, and Jian Sun. "Identity Mappings in Deep Residual Networks." ECCV 2016. -->
