import React from 'react';
import glamorous from 'glamorous';
import colors from '../../colors';

const PostAuthor = ({authors, author, date}) => (
	<Container>
		<Avatar src={author.avatar} />
		<Col>
			<H4>{author.name}</H4>
			<PostDate>{date}</PostDate>
		</Col>
	</Container>
)

export default PostAuthor;

const { slateBlue, greyOne } = colors;

const Container = glamorous.div({
	display: `flex`,
	flexDirection: `row`,
	justifyContent: `center`,
	alignItems: `center`
})

const Col = glamorous.div({
	display: `flex`,
	flexDirection: `column`,
	justifyContent: `center`,
	alignItems: `flex-start`,
})

const PostDate = glamorous.p({
	fontSize: 16,
	padding:0,
	margin: 2,
	color: greyOne
})

const Avatar = glamorous.img({
	height: 40,
	width: 40,
	marginRight: 10,
	borderRadius: `50%`,
	border: `1px solid ${slateBlue}`
})

const H4 = glamorous.h4({
	fontSize: 16,
	fontWeight: `normal`,
	color: slateBlue,
	padding: 0,
	margin: 2
})