import React from 'react';
import background from '../../assets/gray-paper-background.jpg';
import './Header.css';

function Header() {
  return (
    <div>
      <header className="app-header">
        <div className="app-subtitle">
          <h4> Come Celebrate with Us </h4>
        </div>
        <div className="app-title">
          <h1>Carena</h1>
          <h3> & </h3>
          <h1>Andrew</h1>
        </div>
        <div className="app-subtitle">
          <h4> April 20th, 2016 </h4>
        </div>
        <img src={background} alt="paper-background" className="header-image"/>
      </header>
    </div>
  );
}

export default Header;
