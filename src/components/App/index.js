import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

import withAuthentication from '../session/withAuthentication';
import * as routes from '../../constants/routes';
import HomePage from '../Home';

import './index.css';

const App = () => (
  <Router>
    <Switch>
      <Route exact path={routes.HOME} component={HomePage} />
    </Switch>
  </Router>
)

export default withAuthentication(App);