import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { firebaseConnect, getVal, populate } from 'react-redux-firebase';
import { setHiddenState } from '../../../actions/navbar.js';
import { fetchPosts } from '../../../actions/blog.js';

import BlogPost from '../BlogPost';

const mapStateToProps = (state) => ({
	hidden: state.navbar.hidden,
})
const mapDispatchToProps = {
	setHiddenState
};
export default connect(mapStateToProps, mapDispatchToProps)(BlogPost);
