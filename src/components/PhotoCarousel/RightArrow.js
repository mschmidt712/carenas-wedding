import React from 'react';

import './Arrow.css';

function RightArrow (props) {

  return (
    <div className="arrow arrow-right">
      <button onClick={props.onClick}>
        <i className="material-icons">keyboard_arrow_right</i>
      </button>
    </div>
  );
}

export default RightArrow;
