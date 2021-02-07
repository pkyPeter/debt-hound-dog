import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Hangouts from './Hangouts';

const Routes = () => (
  <Router>
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/hangouts" component={Hangouts} />
    </Switch>
  </Router>
);

const Pages = () => (
  <div>
    <h1>Pages</h1>
    <Routes />
  </div>
);

export default Pages;
