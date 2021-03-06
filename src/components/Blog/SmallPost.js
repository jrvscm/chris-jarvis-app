import React from 'react';
import glamorous from 'glamorous';
import { withRouter } from 'react-router-dom';
import { Avatar } from 'mdbreact';
import GithubPhoto from '../../images/github-profile-photo.jpg';
import moment from 'moment';

const SmallPost = ({post, posts, history, id}) => (
	<Container onClick={() => history.push(`/blog/${id}`)}>
		<MainCol>
			<PostImageCol post={post} />
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
							<H4 style={{margin: 0}}>{moment(post.date).format("MMM Do YYYY") }</H4>
						</Col>
						<Col>
							<H4 style={{margin: 0}}>{post.readTime}</H4>
						</Col>
				</Row>
			</PostMetaCol>
		</MainCol>
	</Container>
)

export default withRouter(SmallPost);

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
	height: `100%`,
	width: `100%`,
	color: `black`,
	cursor: `pointer`,
	borderRadius: 6,
	marginTop: 10,
	marginBottom: 10,
	transition: `all .25s ease-in-out`,
	webkitBoxShadow: ` -1px 3px 26px -1px rgba(0,0,0,0.75)`,
	mozBoxShadow: ` -1px 3px 26px -1px rgba(0,0,0,0.75)`,
	oBoxShadow: ` -1px 3px 26px -1px rgba(0,0,0,0.75)`,
	boxShadow: ` -1px 3px 26px -1px rgba(0,0,0,0.75)`,	
	'&:nth-child(1)':{
		marginRight: 10
	},
	'&:nth-child(2)':{
		marginLeft: 10
	},
	'&:hover': {
		webkitTransform: `scale(1.02)`,
		mozTransform: `scale(1.02)`,
		oTransform: `scale(1.02)`,
		transform: `scale(1.02)`
	},
	[mediaQueries.small]: {
		'&:nth-child(1)': {
			marginRight: 0,
		},
		'&:nth-child(2)': {
			marginLeft: 0
		}
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

const MainCol = glamorous.div({
	display: `flex`,
	flexDirection: `column`,
	alignItems: `center`,
	justifyContent: `center`,
	height: `100%`,
	width: `100%`,
	background: `#fff`,
	borderRadius: 6,
})

const PostMetaCol = glamorous.div({
	display: `flex`,
	flexDirection: `column`,
	justifyContent: `center`,
	alignItems: `center`,
	height: `100%`,
	width: `100%`, 
	padding: 20, 
	justifyContent: "space-between !important", 
	alignItems: `flex-start`,
})

const PostImageCol = glamorous.div({
	display: `flex`,
	flexDirection: `column`,
	justifyContent: `center`,
	alignItems: `center`,
	height: `100%`,
	width: `100%`,
	minHeight: 250, 
	borderTopLeftRadius: 6,
	borderTopRightRadius: 6,
}, ({post}) => ({
	backgroundImage: `url(${post.image})`,
	backgroundSize: `cover`,
	backgroundPosition: `center center`,
	backgroundRepeat: `no-repeat`
}))

const H4 = glamorous.h4({
	color: `#738a94`, 
	marginBottom: 20, 
	fontSize: 14,
	[mediaQueries.med]: {
		marginBottom: 5
	}
})