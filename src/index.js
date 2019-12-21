import React from "react";
import {render} from "react-dom";
import {
    BrowserRouter,
    Route
} from 'react-router-dom';

import App from './Components/App'
import Resume from './Components/Resume'
import Pub from './Components/Pub'
import Talks from './Components/Talks'
import Project from './Components/Project';
import Notes from './Components/Notes/Notes';
import AdvAttacks from './Components/Notes/AdvAttacks';
import RobustNetworks from './Components/Notes/RobustNetworks';
import Compression from './Components/Notes/Compression';
import AutoML from './Components/Notes/AutoML';
import EfficientTrain from './Components/Notes/EfficientTrain';
import GNN from './Components/Notes/GNN';

render((
    <BrowserRouter basename="/blog">
        <div>
            <Route exact path="/" component={App} />
            <Route path="/resume" component={Resume} />
            <Route path="/pub" component={Pub} />
            <Route path="/talks" component={Talks} />
            <Route path="/projects" component={Project} />
            <Route path="/notes" component={Notes} />
            <Route path="/notes/papers/adversarial_attack" component={AdvAttacks} />
            <Route path="/notes/papers/robust_networks" component={RobustNetworks} />
            <Route path="/notes/papers/compression" component={Compression} />
            <Route path="/notes/papers/automl" component={AutoML} />
            <Route path="/notes/papers/efficient_train" component={EfficientTrain} />
            <Route path="/notes/papers/gnn" component={GNN} />
        </div>
    </BrowserRouter >),
    document.getElementById("root")
)
