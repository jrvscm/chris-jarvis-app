import React from 'react';
import glamorous from 'glamorous';
import colors from '../../colors';
import { isLoaded } from 'react-redux-firebase';

import PostAuthor from './PostAuthor';

const LargePostPreview = ({post, authors}) => (
	<Container>
		<Col>
			<Image src={post.image} />
		</Col>
		<MetaCol style={{width: "45vw"}}>
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
		</MetaCol>
	</Container>
)

export default LargePostPreview;

const { slateBlue, greyOne } = colors;

const Container = glamorous.div({
	display: `flex`,
	flexDirection: `row`,
	justifyContent: `center`,
	alignItems: `flex-start`,
	height: `60vh`,
	minWidth: `100%`
})

const Col = glamorous.div({
	height: `100%`,
	width: `100%`,
	display: `flex`,
	flexDirection: `column`,
	alignItems: `center`,
	justifyContent: `center`
})

const MetaCol = glamorous.div({
	height: `100%`,
	width: `100%`,
	display: `flex`,
	flexDirection: `column`,
	alignItems: `flex-start`,
	marginTop: 15,
	marginRight: 50,
	marginLeft: 25,
	marginBottom:0
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

