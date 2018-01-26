import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import './Nav.css';

function Nav() {
  return (
    <nav className="app-nav">
      <Router>
        <ul>
          <li><a className="nav-item" href="/">Home</a></li>
          <li><a className="nav-item" href="/about-us">Our Story</a></li>
          <li><a className="nav-item" href="/schedule">Schedule</a></li>
          <li><a className="nav-item" href="/rsvp">RSVP</a></li>
          <li><a className="nav-item" href="/registry">Gift Registry</a></li>
        </ul>
      </Router>
    </nav>
  );
}

export default Nav;
