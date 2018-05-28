import React from 'react';
import glamorous from 'glamorous';
import { isLoaded } from 'react-redux-firebase';

import NavBar from '../NavBar';
import FeaturedPosts from './FeaturedPosts';

const Blog = ({posts}) => {
	if(!isLoaded(posts)) {
		return(<div>...Loading</div>)
	}

	return(
		<Page>
			<NavBar />
			<FeaturedPosts posts={posts} />
		</Page>
	)
}

export default Blog;

const Page = glamorous.div({
})