import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

import HomePage from '../Home';
import withAuthentication from '../session/withAuthentication';
import * as routes from '../../constants/routes';

import './index.css';

const App = () => (
  <Router>
    <Switch>
    	<Redirect exact path="/" to={routes.HOME} />
      <Route exact path={routes.HOME} component={HomePage} />
    </Switch>
  </Router>
)

export default withAuthentication(App);