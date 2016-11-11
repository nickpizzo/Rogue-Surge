import React, { Component } from 'react';
import Nav from './Nav';

import '../../css/partials/reset.scss';

var App = (props) => {
  return (
    <div className="container">
      <Nav/>
      {props.children}
    </div>
  );
}

export default App;
