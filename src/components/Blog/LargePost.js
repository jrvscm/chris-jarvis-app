import React from 'react';
import glamorous from 'glamorous';
import { Avatar } from 'mdbreact';
import GithubPhoto from '../../images/github-profile-photo.jpg';

const LargePost = ({post}) => (
	<Container>
		<MainRow>
			<PostImageCol post={post}/>
			<PostMetaCol>
				<H4>{post.tag}</H4>
				<h2>{post.title}</h2>
				<p>{post.snippet}</p>
				<Row style={{justifyContent: `space-between`}}>
					<div 
						style={{
							height: 48, 
							width: 48, 
							border: `none`, 
							borderRadius: `50%`, 
							backgroundImage: `url(${GithubPhoto})`,
							backgroundPosition: `center center`,
							backgroundSize: `cover`,
							backgroundRepeat: `no-repeat`
						}} 
					/>
						<Col>
							<H4 style={{margin: 0}}>{post.author}</H4>
							<H4 style={{margin: 0}}>{post.date}</H4>
						</Col>
						<Col>
							<H4 style={{margin: 0}}>{post.readTime}</H4>
						</Col>
				</Row>
			</PostMetaCol>
		</MainRow>
	</Container>
)

export default LargePost;

const mediaQueries = {
    med: '@media only screen and (max-width: 1200px)',
    small: '@media only screen and (max-width: 1000px)',
    phone: '@media only screen and (max-width: 650px)',
}

const Col = glamorous.div({
	display: `flex`,
	flexDirection: `column`,
	justifyContent: `flex-start`,
	alignItems: `flex-start`,
	marginRight: `auto`,
	marginLeft: 10
})

const Container = glamorous.div({
	height: 325,
	width: `100%`,
	color: `black`,
	cursor: `pointer`,
	borderRadius: 6,
	marginTop: 10,
	marginBottom: 10,
	transition: `all .35s ease-in-out`,
	WebkitBoxShadow: ` -1px 3px 26px -1px rgba(0,0,0,0.75)`,
	MozBoxShadow: ` -1px 3px 26px -1px rgba(0,0,0,0.75)`,
	OBoxShadow: ` -1px 3px 26px -1px rgba(0,0,0,0.75)`,
	boxShadow: ` -1px 3px 26px -1px rgba(0,0,0,0.75)`,	
	'&:hover': {
		WebkitTransform: `scale(1.02)`,
		MozTransform: `scale(1.02)`,
		OTransform: `scale(1.02)`,
		transform: `scale(1.02)`
	},
	[mediaQueries.small]:{
		height: `100%`
	}
})

const Row = glamorous.div({
	display: `flex`,
	flexDirection: `row`,
	alignItems: `center`,
	justifyContent: `center`,
	height: `100%`,
	width: `100%`,
	background: `#fff`
})

const MainRow = glamorous.div({
	display: `flex`,
	flexDirection: `row`,
	alignItems: `center`,
	justifyContent: `center`,
	height: `100%`,
	width: `100%`,
	background: `#fff`,
	borderRadius: 6,
	[mediaQueries.small]: {
		flexDirection: `column`
	}
})

const PostMetaCol = glamorous.div({
	display: `flex`,
	flexDirection: `column`,
	justifyContent: `center`,
	alignItems: `center`,
	height: `100%`,
	width: `40%`, 
	padding: 20, 
	justifyContent: "space-between !important", 
	alignItems: `flex-start`,
	[mediaQueries.small]: {
		width: `100%`
	}	
})

const PostImageCol = glamorous.div({
	display: `flex`,
	flexDirection: `column`,
	justifyContent: `center`,
	alignItems: `center`,
	height: `100%`,
	minHeight: 250,
	width: `60%`, 
	borderTopLeftRadius: 6,
	borderBottomLeftRadius: 6,
	[mediaQueries.small]: {
		width: `100%`,
		borderTopLeftRadius: 6,
		borderTopRightRadius: 6,
		borderBottomLeftRadius: 0,		
	}
}, ({post}) => ({
	backgroundImage: `url(${post.image.fields.file.url})`,
	backgroundSize: `cover`,
	backgroundPosition: `center center`,
	backgroundRepeat: `no-repeat`,	
}))

const H4 = glamorous.h4({
	color: `#738a94`, 
	marginBottom: 20, 
	fontSize: 14,
	[mediaQueries.med]: {
		marginBottom: 5
	}
})