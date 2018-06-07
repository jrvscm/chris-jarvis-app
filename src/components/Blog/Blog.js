import React, { Component } from 'react';
import glamorous from 'glamorous';
import { isLoaded } from 'react-redux-firebase';

import NavBar from '../NavBar';
import FeaturedPosts from './FeaturedPosts';

const Blog = ({smallPosts, mediumPosts, largePosts, authors}) => {
	if(!isLoaded(smallPosts, mediumPosts, largePosts, authors)) {
		return(<div>...Loading</div>)
	}

	return(
		<Page>
			<NavBar />
			<FeaturedPosts 
				largePosts={largePosts.posts}
				mediumPosts={mediumPosts.posts}
				smallPosts={smallPosts.posts}
				authors={authors}
			/>
		</Page>
	)
}

export default Blog;

const Page = glamorous.div({
})