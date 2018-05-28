import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { firebaseConnect, getVal, populate } from 'react-redux-firebase';

import Blog from '../Blog';

const populates = [
	{ root: 'posts', child: 'posts' }
]
const mapStateToProps = (state) => ({
	posts:	getVal(state.firebase, 'data/posts'),
	authors: getVal(state.firebase, 'data/authors')
})
const mapDispatchToProps = {
};
export default compose(
  firebaseConnect([
  	{ path: 'featured', populates: populates }, 
  	{ path: 'authors' }
  ]),
  connect(mapStateToProps, mapDispatchToProps)
)(Blog);
