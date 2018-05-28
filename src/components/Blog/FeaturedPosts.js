import React from 'react';
import glamorous from 'glamorous';

import PostPreview from './PostPreview';

const FeaturedPosts = ({posts}) => (
	<Container>
		{ Object.keys(posts).map(key => <PostPreview key={key} post={posts[key]} />) }
	</Container>
)

export default FeaturedPosts;

const Container = glamorous.div({
	display: `flex`,
	flexDirection: `Column`,
	justifyContent: `center`,
	alignItems: `center`,
	width: 600, 
	marginTop: 100
})