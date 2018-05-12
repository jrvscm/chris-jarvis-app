import React from 'react';
import { withRouter, Redirect } from 'react-router';
import { withFirebase, isEmpty, isLoaded } from 'react-redux-firebase';
import { compose } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { HOME } from '../../constants/routes';
import randomImage from './images/randomImage.jpg';
import glamorous from 'glamorous';

class SplashPage extends React.Component {
  static propTypes = {
    history: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired
  }

  render() {
    const { profile } = this.props;
    if (!isLoaded(profile)) {
      return (
        <Splash></Splash>
      );
    }
    return <Redirect to={isEmpty(profile) ? HOME : HOME } />;
  }
}

export default compose(
  withRouter,
  withFirebase,
  connect(state => ({
    profile: state.firebase.profile
  }))
)(SplashPage);

const Splash = glamorous.div({
  height: '100vh',
  width: '100vw',
  background: `url(./images/randomImage.jpg) center center no-repeat`,
  backgroundSize: `cover`
});

const Splashlogo = glamorous.img({
  position: 'absolute',
  margin: 'auto',
  top: '0',
  right: '0',
  bottom: '0',
  left: '0',
});