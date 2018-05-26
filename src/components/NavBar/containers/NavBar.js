import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { firebaseConnect, getVal } from 'react-redux-firebase';
import { updateDimensions, setHiddenState } from '../../../actions/navbar';
import NavBar from '../NavBar';

const mapStateToProps = (state) => ({
	hidden: state.navbar.hidden,
	dimensions: state.navbar.dimensions
})
const mapDispatchToProps = {
	updateDimensions, setHiddenState
};
export default compose(
  firebaseConnect([]),
  connect(mapStateToProps, mapDispatchToProps)
)(NavBar);