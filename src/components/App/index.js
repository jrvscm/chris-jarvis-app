import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

import Navigation from '../Navigation';
import SplashPage from '../Splash';
import LandingPage from '../Landing';
import GenresPage from '../Genres';
import MoviesPage from '../Movies';
import SignUpPage from '../SignUp';
import SignInPage from '../SignIn';
import LogOutPage from '../LogOut';
import PasswordForgetPage from '../PasswordForget';
import HomePage from '../Home';
import AccountPage from '../Account';
import StoryPage from '../Story';
import BookShelfPage from '../BookShelf';
import DiscoverPage from '../Discover';
import ProfilePage from '../Profile';
import withAuthentication from '../Session/withAuthentication';
import * as routes from '../../constants/routes';
import HomePage from '../HomePage';

import './index.css';

const App = () => (
  <Router>
    <Switch>
      <Route exact path={routes.SPLASH} component={SplashPage} />
      <Route exact path={routes.HOME} component={HomePage} />
    </Switch>
  </Router>
)

export default withAuthentication(App);