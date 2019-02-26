import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ReduxPage from '../containers/ReduxPage';
import HomePage from '../containers/HomePage';

const RoutersApp = () => (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route path="/redux" component={ReduxPage} />
  </Switch>
);

export default RoutersApp;
