import React from 'react';
import glamorous from 'glamorous';
import { isLoaded } from 'react-redux-firebase';

import LargePostPreview from './LargePostPreview';
import MediumPostPreview from './MediumPostPreview';
import SmallPostPreview from './SmallPostPreview';

const FeaturedPosts = ({largePosts, smallPosts, mediumPosts, authors}) => (
	<Container>
		<Row>
			{ 
				Object.keys(largePosts).map(key => 
					<LargePostPreview 
						key={key} 
						post={largePosts[key]} 
						authors={authors} 
					/>
				) 
			}
		</Row>
		<Row>
			{ 
				Object.keys(mediumPosts).map(key => 
					<MediumPostPreview 
						key={key} 
						post={mediumPosts[key]} 
						authors={authors} 
					/>
				) 
			}
		</Row>
		<Row>	
			{ 
				Object.keys(smallPosts).map(key => 
					<SmallPostPreview 
						key={key} 
						post={smallPosts[key]} 
						authors={authors} 
					/>
				) 
			}
		</Row>
	</Container>
)

export default FeaturedPosts;

const Container = glamorous.div({
	display: `flex`,
	flexDirection: `Column`,
	justifyContent: `center`,
	alignItems: `center`,
	width: `100%`, 
	marginTop: 100
})

const Row = glamorous.div({
	display: `flex`,
	flexDirection: `row`,
	flexWrap: `wrap`,
	alignItems: `center`,
	justifyContent: `space-between`,
	minWidth: `80%`,
	marginTop: 25,
	marginBottom: 25
})