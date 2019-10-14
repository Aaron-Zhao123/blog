import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';

/**
 * Import all page components here
 */
import App from './Components/App';
import Pub from './Components/Pub';
import Resume from './Components/Resume';
import Talks from './Components/Talks';
import Project from './Components/Projec';

/**
 * All routes go here.
 * Don't forget to import the components above after adding new route.
 */
export default (
    <Router>
        <Route exact path="/" component={App}>
        <Route path="/resume" component={Pub} >
        <Route path="/pub" component={Resume} >
        <Route path="/talks" component={Talks} >
        <Route path="/projects" component={Project} >
        <Route path="/notes" component={Pub} >
        {/* <Route path="/resume" component={Resume} /> */}
    </Router>
);
