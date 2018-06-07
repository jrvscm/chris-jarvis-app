import React from 'react';
import glamorous from 'glamorous';
import colors from '../../colors';
import { isLoaded } from 'react-redux-firebase';

import PostAuthor from './PostAuthor';

const LargePostPreview = ({post, authors}) => (
	<Container>
		<Image src={post.image} />
		<H2>{post.title}</H2>
		<LogLine>{post.logline}</LogLine>
		{ 
			Object.keys(authors).map(key => 
				<PostAuthor 
					key={key} 
					author={authors[key]} 
					date={post.date} 
				/>
			) 
		}
	</Container>
)

export default LargePostPreview;

const { slateBlue, greyOne } = colors;

const Container = glamorous.div({
	display: `flex`,
	flexDirection: `column`,
	justifyContent: `center`,
	alignItems: `flex-start`,
	height: 400,
	minWidth: `100%`
})

const Image = glamorous.div({
	height: `100%`,
	width: `100%`,
}, (props) => ({
	background: `url(${props.src}) center center no-repeat`,
	backgroundSize: `cover`
}))

const LogLine = glamorous.p({
	marginTop: 15,
	marginBottom: 15,
	fontSize: 16,
	color: greyOne
})

const H2 = glamorous.h2({
	fontSize: 26,
	marginTop: 15,
	marginBottom: 0
})

