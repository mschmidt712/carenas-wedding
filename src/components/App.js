import React, { Component } from 'react';

import Routes from '../routes.js';
import Header from './Header/Header.js';
import Nav from './Nav/Nav.js';

import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header />
        <Nav />
        <div className="page-container">
          <Routes />
        </div>
      </div>
    );
  }
}

export default App;
