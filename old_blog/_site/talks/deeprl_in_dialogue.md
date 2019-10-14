## Deep Reinforcement learning for dialogue policy optimization

#### General model
Speech recognition -> text -> language understanding -> semantics -> dialogue management -> actions -> language generation -> text -> speech synthesis


#### Belief Tracking
A method of providing conditioned probability from previous states (belief).
The previous sentence gives a belief state and provides this to the current
sentence.

Belief tracking accumulates everything happended in the past, policy
optimization perform a look-ahead to the future.

#### Reinforcement learning
* speaker -> reward ri and observation alphai -> dialogue system
* dialogue system builds belief states
* dialogue system -> action -> speaker
* ACER-experience replay: store previous observations and randomly shuffle to reply,
only happens on off-policy methods (assuming the current policy is not followed)
* Targets from the retrace algorithm
* Trust-region policy optimization: approximate Kl divergence using first of Taylor
