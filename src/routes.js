import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import PhotoCarousel from './components/PhotoCarousel/PhotoCarousel';
import OurStory from './components/OurStory/OurStory';
import Schedule from './components/Schedule/Schedule';
import RSVP from './components/RSVP/RSVP';
import Registry from './components/Registry/Registry';

/**
 * Defines project routes.
 */
function RouterConfig () {
  return (
    <Router>
      <div>
        <Route exact path="/" component={PhotoCarousel} />
        <Route exact path="/about-us" component={OurStory} />
        <Route exact path="/schedule" component={Schedule} />
        <Route exact path="/rsvp" component={RSVP} />
        <Route exact path="/registry" component={Registry} />
      </div>
    </Router>
  );
};

export default RouterConfig;
