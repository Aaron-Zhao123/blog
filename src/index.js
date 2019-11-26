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
import Notes from './Components/Notes';

render((
    <BrowserRouter basename="/blog">
        <div>
            <Route exact path="/" component={App} />
            <Route path="/resume" component={Resume} />
            <Route path="/pub" component={Pub} />
            <Route path="/talks" component={Talks} />
            <Route path="/projects" component={Project} />
            <Route path="/notes" component={Notes} />
        </div>
    </BrowserRouter >),
    document.getElementById("root")
)
