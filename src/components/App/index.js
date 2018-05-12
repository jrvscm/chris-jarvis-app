import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

import SplashPage from '../Splash';
import HomePage from '../Home';
import withAuthentication from '../session/withAuthentication';
import * as routes from '../../constants/routes';

import './index.css';

const App = () => (
  <Router>
    <Switch>
      <Route exact path={routes.HOME} component={HomePage} />
    </Switch>
  </Router>
)

export default withAuthentication(App);