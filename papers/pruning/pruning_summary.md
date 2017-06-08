---
layout: default
---

# [](#list) List of papers
  * Coarse-grained pruning (Filter-wise, Kernel-wise)[details](#coarseprune)
    1. Pruning Filters for Efficient ConvNets (waiting review)
    2. Learning Structured Sparsity in Deep Neural Networks (waiting review)
    3. Fast ConvNets Using Group-wise Brain Damage (waiting review)
    4. Learning to Prune Deep Neural Networks via Layer-wise Optimal Brain Surgeon (waiting review)
    5. Net-Trim: A Layer-wise Convex Pruning of Deep Neural Networks (waiting review)

  * Fine-grained pruning [details](#fineprune)
    1. Learning both Weights and Connections for EfficientNeural Networks
    2. DSD:  DENSE-SPARSE-DENSE Training For Deep Neural Networks

  * Other types of pruning [details](#oprune)
    1. Customizing DNN Pruning to the Underlying Hardware
Parallelism (watiting to be released on ISCA 2017)
    2. Exploring the Regularity of Sparse Structure inConvolutional Neural Networks

  * Regularizers [details](#reg)

  * Quantization [details](#quan)

* * *

## <a id="coarseprune"></a>Coarse-grained Pruning
1. **Pruning Filters for Efficient ConvNets**
> > **Review**([Paper link](https://arxiv.org/pdf/1608.08710))
> >
> > **Bibtex**
> > ```
@article{DBLP:journals/corr/LiKDSG16,
  author    = {Hao Li and
               Asim Kadav and
               Igor Durdanovic and
               Hanan Samet and
               Hans Peter Graf},
  title     = {Pruning Filters for Efficient ConvNets},
  journal   = {CoRR},
  volume    = {abs/1608.08710},
  year      = {2016},
  url       = {http://arxiv.org/abs/1608.08710},
  timestamp = {Fri, 02 Sep 2016 17:46:24 +0200},
  biburl    = {http://dblp.uni-trier.de/rec/bib/journals/corr/LiKDSG16},
  bibsource = {dblp computer science bibliography, http://dblp.org}
}
```

2. **Learning Structured Sparsity in Deep Neural Networks**
> > **Review**([Paper link](https://arxiv.org/pdf/1608.08710))
> >
> > **Bibtex**
> > ```
    @article{DBLP:journals/corr/WenWWCL16,
      author    = {Wei Wen and
                   Chunpeng Wu and
                   Yandan Wang and
                   Yiran Chen and
                   Hai Li},
      title     = {Learning Structured Sparsity in Deep Neural Networks},
      journal   = {CoRR},
      volume    = {abs/1608.03665},
      year      = {2016},
      url       = {http://arxiv.org/abs/1608.03665},
      timestamp = {Mon, 30 Jan 2017 17:08:13 +0100},
      biburl    = {http://dblp.uni-trier.de/rec/bib/journals/corr/WenWWCL16},
      bibsource = {dblp computer science bibliography, http://dblp.org}
    }
    }
```

3. **Fast ConvNets Using Group-wise Brain Damage**
> > **Review**([Paper link](https://arxiv.org/pdf/1506.02515))
> >
> > **Bibtex**
> > ```
    @article{DBLP:journals/corr/LebedevL15,
      author    = {Vadim Lebedev and
                   Victor S. Lempitsky},
      title     = {Fast ConvNets Using Group-wise Brain Damage},
      journal   = {CoRR},
      volume    = {abs/1506.02515},
      year      = {2015},
      url       = {http://arxiv.org/abs/1506.02515},
      timestamp = {Wed, 01 Jul 2015 15:10:24 +0200},
      biburl    = {http://dblp.uni-trier.de/rec/bib/journals/corr/LebedevL15},
      bibsource = {dblp computer science bibliography, http://dblp.org}
    }
```

4. **Learning to Prune Deep Neural Networks via Layer-wise Optimal Brain Surgeon**
> > **Review**([Paper link](https://arxiv.org/pdf/1705.07565))
> >
> > **Bibtex**
> > ```
@article{DBLP:journals/corr/DongCP17,
  author    = {Xin Dong and
               Shangyu Chen and
               Sinno Jialin Pan},
  title     = {Learning to Prune Deep Neural Networks via Layer-wise Optimal Brain
               Surgeon},
  journal   = {CoRR},
  volume    = {abs/1705.07565},
  year      = {2017},
  url       = {http://arxiv.org/abs/1705.07565},
  timestamp = {Thu, 01 Jun 2017 19:31:46 +0200},
  biburl    = {http://dblp.uni-trier.de/rec/bib/journals/corr/DongCP17},
  bibsource = {dblp computer science bibliography, http://dblp.org}
}
```

4. **Net-Trim: A Layer-wise Convex Pruning of Deep Neural Networks**
> > **Review**([Paper link](https://arxiv.org/pdf/1611.05162))
> >
> > **Bibtex**
> > ```
@article{DBLP:journals/corr/AghasiNR16,
  author    = {Alireza Aghasi and
               Nam Nguyen and
               Justin Romberg},
  title     = {Net-Trim: {A} Layer-wise Convex Pruning of Deep Neural Networks},
  journal   = {CoRR},
  volume    = {abs/1611.05162},
  year      = {2016},
  url       = {http://arxiv.org/abs/1611.05162},
  timestamp = {Thu, 01 Dec 2016 19:32:08 +0100},
  biburl    = {http://dblp.uni-trier.de/rec/bib/journals/corr/AghasiNR16},
  bibsource = {dblp computer science bibliography, http://dblp.org}
}
```

* * *

## <a id="fineprune"></a>Fine-grained Pruning
1. **Learning both Weights and Connections for Efficient Neural Networks**
> > **Review**([Paper link](https://arxiv.org/pdf/1506.02626))
> > Fine-grained pruning, it discussed how to use regularizers and decrease dropouts.
> >
> > **Bibtex**
> > ```
@article{DBLP:journals/corr/HanPTD15,
  author    = {Song Han and
               Jeff Pool and
               John Tran and
               William J. Dally},
  title     = {Learning both Weights and Connections for Efficient Neural Networks},
  journal   = {CoRR},
  volume    = {abs/1506.02626},
  year      = {2015},
  url       = {http://arxiv.org/abs/1506.02626},
  timestamp = {Wed, 01 Jul 2015 15:10:24 +0200},
  biburl    = {http://dblp.uni-trier.de/rec/bib/journals/corr/HanPTD15},
  bibsource = {dblp computer science bibliography, http://dblp.org}
}
```
2. **DSD:  DENSE-SPARSE-DENSE Training For Deep Neural Network**
> > **Review**([Paper link](https://arxiv.org/pdf/1607.04381.pdf))
> > Fine-grained pruning, it discussed how to use regularizers and decrease dropouts.
> >
> > **Bibtex**
> > ```
@article{DBLP:journals/corr/HanPNMTECTD16,
  author    = {Song Han and
               Jeff Pool and
               Sharan Narang and
               Huizi Mao and
               Shijian Tang and
               Erich Elsen and
               Bryan Catanzaro and
               John Tran and
               William J. Dally},
  title     = {DSD: Regularizing Deep Neural Networks with Dense-Sparse-Dense Training
               Flow},
  journal   = {CoRR},
  volume    = {abs/1607.04381},
  year      = {2016},
  url       = {http://arxiv.org/abs/1607.04381},
  timestamp = {Wed, 07 Jun 2017 14:41:40 +0200},
  biburl    = {http://dblp.uni-trier.de/rec/bib/journals/corr/HanPNMTECTD16},
  bibsource = {dblp computer science bibliography, http://dblp.org}
}
```

* * *

## <a id="oprune"></a>Other types of Pruning
1. **Customizing DNN Pruning to the Underlying Hardware
Parallelism**

2. **Exploring the Regularity of Sparse Structure inConvolutional Neural Networks**
> > **Review**([Paper link](https://arxiv.org/pdf/1607.00064))
