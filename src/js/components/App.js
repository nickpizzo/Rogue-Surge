import React, { Component } from 'react';
import Nav from './Nav';
import Footer from './Footer';

import '../../css/partials/reset.scss';
import '../../css/app.scss';

var App = (props) => {
  return (
    <div className="container">
      <Nav/>
        {props.children}
      <Footer/>
    </div>
  );
}

export default App;
