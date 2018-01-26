import React from 'react';

import './Arrow.css';

function LeftArrow (props) {
  return (
    <div className="arrow arrow-left">
      <button onClick={props.onClick}>
        <i className="material-icons">keyboard_arrow_left</i>
      </button>
    </div>
  );
}

export default LeftArrow;
