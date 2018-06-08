import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

import HomePage from '../Home';
import Blog from '../Blog';
import RouteListener from '../RouteListener';
import withAuthentication from '../session/withAuthentication';
import * as routes from '../../constants/routes';

import './index.css';

const App = () => (
  <Router>
    <div>
      <RouteListener />
      <Switch>
    	 <Redirect exact path="/" to={routes.BLOG} />
        <Route exact path={routes.HOME} component={HomePage} />
        <Route exact path={routes.BLOG} component={Blog} />
      </Switch>
    </div>
  </Router>
)

export default withAuthentication(App);