import React from 'react';
import glamorous from 'glamorous';
import { isLoaded } from 'react-redux-firebase';

import LargePostPreview from './LargePostPreview';
import MediumPostPreview from './MediumPostPreview';
import SmallPostPreview from './SmallPostPreview';

const FeaturedPosts = ({largePosts, smallPosts, mediumPosts, authors}) => (
	<Container>
		<LargeRow>
			{ 
				Object.keys(largePosts).map(key => 
					<LargePostPreview 
						key={key} 
						post={largePosts[key]} 
						authors={authors} 
					/>
				) 
			}
		</LargeRow>
		<MediumRow>
			{ 
				Object.keys(mediumPosts).map(key => 
					<MediumPostPreview 
						key={key} 
						post={mediumPosts[key]} 
						authors={authors} 
					/>
				) 
			}
		</MediumRow>
		<MediumRow>	
			{ 
				Object.keys(smallPosts).map(key => 
					<SmallPostPreview 
						key={key} 
						post={smallPosts[key]} 
						authors={authors} 
					/>
				) 
			}
		</MediumRow>
	</Container>
)

export default FeaturedPosts;

const Container = glamorous.div({
	display: `flex`,
	flexDirection: `Column`,
	justifyContent: `center`,
	alignItems: `center`,
	width: `100%`, 
	marginTop: `30vh`
})

const LargeRow = glamorous.div({
	display: `flex`,
	flexDirection: `row`,
	flexWrap: `wrap`,
	alignItems: `center`,
	justifyContent: `flex-start`,
	width: `100%`,
	marginTop: 0,
	marginBottom: 25
})

const MediumRow = glamorous.div({
	display: `flex`,
	flexDirection: `row`,
	flexWrap: `wrap`,
	alignItems: `center`,
	justifyContent: `flex-start`,
	maxWidth: `80%`,
	marginTop: 25,
	marginBottom: 25
})