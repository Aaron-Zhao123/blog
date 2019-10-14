---
layout: default
---

# [](#list) List of papers
  * Yolo [details](#yolo)
    1. You Only Look Once: Unified, Real-Time Object Detection
    2. YOLO9000: Better, Faster, Stronger


* * *

## <a id="coarseprune"></a>Yolo

#### **1. You Only Look Once: Unified, Real-Time Object Detection**

**Review**([Paper link](https://arxiv.org/abs/1506.02640))
Most traditional object detection generates bounding boxes in an image first
and then runs a classifier.
Post-processing is used to refine the bounding boxes after classification to
avoid duplication of detections.
These pipelines are slow.
Yolo uses a single conv network to predict multiple bounding boxes and
the class probabilities for these boxes.

Each image becomes S*S grids, the center grid of the image is responsible
for the detection.
Each grid cell predicts B bounding boxes and confidence scores.
Confidence is defined as Pr(obj)*IOU, where IOU is the intersection over
union between the predicted box and the ground truth.

The network has 24 conv layers and 2 fc layers.
The first 20 layers are picked and appeneded with an avg-pool and a fc layer,
and then trained on ImageNet.
Later on, the 20 layers are taken and added with 4 conv layers and 2 fc layers
to retrain on the detection network.
The input resolution if increased to 448 also because detection always requires
fine-grained visual information.
The final layer outputs both class probabilities and bounding box coordinates.

#### **2. YOLO9000: Better, Faster, Stronger**
The YoloV2 model added batch normalization.
This time, the classification network is trained at full 448*448 resolution
for 10 epochs on ImageNet.
To get a good prior on anchor boxes, the YOLOV2 model runs a
k-means clustering to find good priors.
* Anchor boxes: each grid has 5 anchor boxes.
The appropriate bounding box is selected as the bounding box with highest IOU between the ground truth box and anchor box.
* IOU (Intersection over unions):
Intersection(detected, truth) / union(detected, truth)
