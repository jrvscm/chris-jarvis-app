import React from 'react';
import glamorous from 'glamorous';
import colors from '../../colors';

const PostPreview = ({post}) => (
	<Container>
		<Header src={post.image}>
			<H2>{post.title}</H2>
		</Header>
		<h4>{post.author}</h4>
		<Container>
			<p>
				{	post.content[0] }
			</p>
		</Container>
	</Container>
)

export default PostPreview;

const { slateBlue } = colors;

const Container = glamorous.div({
	display: `flex`,
	flexDirection: `column`,
	justifyContent: `center`,
	alignItems: `center`,
	margin: 25,
	border: `1px solid slateBlue`
})

const Header = glamorous.div({
	display: `flex`,
	flexDirection: `row`,
	alignItems: `center`,
	justifyContent: `center`,
	width: `100%`,
	height: 200,
	color: slateBlue,
	fontSize: 32
}, (props) => ({
	background: `url(${props.src}) center center no-repeat`,
	backgroundSize: `cover`
}))

const H2 = glamorous.h2({
})