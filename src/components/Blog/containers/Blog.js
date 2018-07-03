import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { firebaseConnect, getVal, populate } from 'react-redux-firebase';
import { setHiddenState, setScrollToContact } from '../../../actions/navbar.js';
import { fetchPosts } from '../../../actions/blog.js';

import Blog from '../Blog';

const mapStateToProps = (state) => ({
	hidden: state.navbar.hidden,
	posts: state.blog.posts,
	loading: state.blog.loading,
	scrollToContact: state.navbar.scrollToContact
})

const mapDispatchToProps = {
	setHiddenState,
	fetchPosts,
	setScrollToContact
};
export default connect(mapStateToProps, mapDispatchToProps)(Blog);
