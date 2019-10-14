---
layout: default
---
## Elevator pitch
DNNs will indeed become a popular workload for both embedded systems and
cloud computing.
A DNN accelerator means direct increase in power-efficiency, this later
translates to meeting the low power budget for embedded systems and reducing
cost and heat disspications on the cloud infrastructure.

The reality is, on the software level, this workload has many variabilities
which makes it become more than matrix multiplications.
As DNNs nowadays are having more alternatives and researchers worked on a number
of possible optimizations.
It becomes really hard to compare how the software level optimizations
trade-off with acutal hardware overheads on a wide range of DNNs.
In terms of the big picture, my research focuses on the optimization of 
DNN accelerator from the whole software-to-hardware stack, 
walking all the way down from software optimizations to hardware
accelerator designs.
Because I strongly believe, hardware designs must benefit from software
optimizations and software optimizations are only useful if a peice of hardware
can take avantage of that.
The aim is to discover what does various software optimization actually mean
on custom hardwares and how useful they are on a wide range of networks.

In terms of actual research, on the software optimizations, I mainly focus
on pruning and quantization.
Pruning refers to reduce the redundancies in a network by directly removing 
parameters.
In my first year, I reimplemneted a number of popular static pruning method, 
and we are working on a new dynmaic pruning method at the moment.
I am also interested in quantization since this means a fundanmental change
of your arithemtic units in hardware.
In my first year, I reimplemneted a number of quantization methods on
software emulations.
I am currently working on a novel arithmetic called recentralization.

On the hardware side, I identify three main optimization oppotunities.

- Actual compute
- On-chip data transfer
- Off-chip to on-chip data transfer

My main focus statys on optimizing the compute units and off-chip to on-chip
data transfer.
For optimizing the computations, I aim to combine the software quantization
method. The quanitzed numbers means easier arithmetic units and thus more
energy-efficient computations.
I am working on performing a multipiler-free DNN model on FPGAs and this work
is collaborately fiished with students at Imperial College London
Besides, I am independetly researching on optimizing the off-chip to on-chip
communications.
The basic idea is to use polyhedral model to solve for the best data access
pattern for maximized data locality.

Combining what we've learnt from the research, I would collaborate with
other researchers to build a framework that supports auto-generation of
DNN accelerators.
Users directly describe a DNN model on software, the frameworks can perform
multiple optimizations on both hardware and software to generate a hardware
accelerator.

## Research Questions

As identified in my report, I would like to try help to answer or even extend
the following research questions:

1. What is the best combination of optimization techniques for compressing DNNs:

    This questions is partially answered in our Mayo paper, the emperical results
    suggest that pruning is orthgonal to quantization. The future plan is to
    investigate more emperically.
    We expect to explore on object detection and speech models as well.


2. What are the hardware implications of different compression techniques?

    Currently, I hope to investigate on a few interesting design points, where we 
    do not have any multiplications in hardware. The future plan is to investigate
    more on how pruning techniques translates to hardware.

3. How to optimize parallel executions of a DNN?

    I only expect to partially investigate on the reuse model part of this
    question.
    As I've mentioned, this question can be broken down to how to optimize
    on-chip data transfer, how to arrange your PEs and how to optimize off-chip
    to on-chip data transfer.
    My focus would stay on off-chip to on-chip data transfer.
    I would implement only a gaint parallel multiplication core with fixed
    on-chip data transfer pattern.

4. What is the optimal degree of reconfigurability

    This is a bigger question that I aim to answer at the end of constructing of
    all frameworks.
    It might be at the end that I found a fixed set of optimizations worked
    very well on all networks.
    This would later turns into a suggestion for ASIC designers.
    I would hypothesis that different networks would be beneficial from
    very different optimization techniques, in other words, I beleve coarse-graiend
    reconfigurability should be the future of DNN accelerators

## Collaborators

The reason of collaboration is we are building a relatiely alarge set of frameworks.
I do have research ideas such as recentralization and polyhedral models that belongs to me.


## Polyhedral Models
