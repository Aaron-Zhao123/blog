## Deep learning for speech and language processing

#### Structured models
NAT-LSTM

#### Policy adaptation for dl
User -> ASR/SLU -> Dialogue management -> TTS -> User

* Policy model is something inside dialogue mangement that produces an action
* Based on belief state, we produce an action (DQN, A2C: policy+value)

#### Policy adaption
* domain extension: add inputs/outputs.
* domain transfer: train policy from scratch in the new domain
* the model structure has to be changed

#### Multi-agent dialog policy
* Classify each belief states and actions beforehand
* Global agents handle independent states
* The final action is selected as the one with maximum Q-value
* Internal message exchange: each following layer takes the average of all slot-depedent
agents' output and also the output of the global-independent agent.

Question: can't we do this for image? The number of agents is the number of actions?

* Advantages:
  - Fast learning, S-agent now can transfer to the new agent
  - Easy adaptation: shared parameters can be used to initialize
