import React from 'react';
import glamorous from 'glamorous';
import colors from '../../colors';
import { isLoaded } from 'react-redux-firebase';

import PostAuthor from './PostAuthor';
import PostMediaCard from '../PostMediaCard';

const SmallPostPreview = ({post, authors}) => (
	<PostMediaCard 
		image={post.image}
		title={post.title}
		logline={post.logline}
		authors={authors}
		date={post.date}
	/>
)

export default SmallPostPreview;

