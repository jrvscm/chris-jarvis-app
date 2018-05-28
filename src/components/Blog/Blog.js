import React, { Component } from 'react';
import glamorous from 'glamorous';
import { isLoaded } from 'react-redux-firebase';

import NavBar from '../NavBar';
import FeaturedPosts from './FeaturedPosts';

const Blog = ({smallPosts, authors}) => {
	if(!isLoaded(smallPosts, authors)) {
		return(<div>...Loading</div>)
	}

	return(
		<Page>
			<NavBar />
			<FeaturedPosts 
				posts={smallPosts.posts}
				authors={authors}
			/>
		</Page>
	)
}

export default Blog;

const Page = glamorous.div({
})