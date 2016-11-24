import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './components/App'
import Landing from "./components/Landing";
import Overwatch from "./components/Overwatch";
import Csgo from "./components/Csgo";
import Ownership from "./components/Ownership";

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Landing}/>
      <Route path="/overwatch" component={Overwatch}/>
      <Route path="/csgo" component={Csgo}/>
      <Route path="/ownership" component={Ownership}/>

    </Route>

  </Router>
  , document.querySelector('.main'));
