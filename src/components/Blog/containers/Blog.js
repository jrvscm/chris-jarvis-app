import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { firebaseConnect, getVal, populate } from 'react-redux-firebase';
import { setHiddenState } from '../../../actions/navbar.js';

import Blog from '../Blog';

const populates = [
	{ root: 'posts', child: 'posts' }
];
const mapStateToProps = (state) => ({
	smallPosts:	populate(state.firebase, 'featured_small', populates),
	mediumPosts: populate(state.firebase, 'featured_small', populates),
	largePosts: populate(state.firebase, 'featured_small', populates),
	authors: getVal(state.firebase, 'data/authors'),
	hidden: state.navbar.hidden
})
const mapDispatchToProps = {
	setHiddenState
};
export default compose(
  firebaseConnect([
  	{ path: 'featured_small', populates: populates },
  	{ path: 'authors' }
  ]),
  connect(mapStateToProps, mapDispatchToProps)
)(Blog);
