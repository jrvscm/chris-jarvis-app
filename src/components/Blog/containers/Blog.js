import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { firebaseConnect, getVal, populate } from 'react-redux-firebase';

import Blog from '../Blog';

const populates = [
	{ root: 'posts', child: 'posts' }
];
const mapStateToProps = (state) => ({
	smallPosts:	populate(state.firebase, 'featured_small', populates),
	mediumPosts: populate(state.firebase, 'featured_medium', populates),
	largePosts: populate(state.firebase, 'featured_large', populates),
	authors: getVal(state.firebase, 'data/authors')
})
const mapDispatchToProps = {
};
export default compose(
  firebaseConnect([
  	{ path: 'featured_small', populates: populates },
  	{ path: 'featured_medium', populates: populates },
  	{ path: 'featured_large', populates: populates },
  	{ path: 'authors' }
  ]),
  connect(mapStateToProps, mapDispatchToProps)
)(Blog);
