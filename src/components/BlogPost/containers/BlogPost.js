import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { firebaseConnect, getVal, populate } from 'react-redux-firebase';
import { setHiddenState, setScrollToContact } from '../../../actions/navbar.js';
import { fetchPost } from '../../../actions/BlogPost.js';

import BlogPost from '../BlogPost';

const mapStateToProps = (state) => ({
	hidden: state.navbar.hidden,
	post: state.blogpost.post,
	loading: state.blog.loading,
	scrollToContact: state.navbar.scrollToContact
})
const mapDispatchToProps = {
	setHiddenState,
	fetchPost,
	setScrollToContact
};
export default connect(mapStateToProps, mapDispatchToProps)(BlogPost);
