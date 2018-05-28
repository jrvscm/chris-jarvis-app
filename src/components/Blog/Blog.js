import React, { Component } from 'react';
import glamorous from 'glamorous';
import { isLoaded } from 'react-redux-firebase';

import NavBar from '../NavBar';
import FeaturedPosts from './FeaturedPosts';

const Blog = ({posts, authors}) => {
	if(!isLoaded(posts, authors)) {
		return(<div>...Loading</div>)
	}

	return(
		<Page>
			<NavBar />
			<FeaturedPosts 
				posts={posts} 
				authors={authors} 
			/>
		</Page>
	)
}

export default Blog;

const Page = glamorous.div({
})