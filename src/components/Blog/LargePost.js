import React from 'react';
import glamorous from 'glamorous';
import { Avatar } from 'mdbreact';
import GithubPhoto from '../../images/github-profile-photo.jpg';

const post = {
 	title: 'My First Post',
 	author: 'Chris Jarvis',
 	snippet: `Hey! Welcome to Ghost, it's great to have you :). We know that first impressions are important, so we've populated yoru new site with some initial getting started posts taht will help you get started.`,
 	image: 'https://images.unsplash.com/photo-1523978591478-c753949ff840?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c92fa17c403874495c84c6f31f5ef403&auto=format&fit=crop&w=1350&q=80',
 	readTime: '1 MIN READ',
 	tag: 'GETTING STARTED'
 }

const LargePost = () => (
	<Container>
		<Row>
			<Col 
				style={{
					width: `65%`, 
					backgroundImage: `url(${post.image})`,
					backgroundSize: `cover`,
					backgroundPosition: `center center`,
					backgroundRepeat: `no-repeat`
				}} 
			/>
			<Col 
				style={{
					width: `35%`, 
					padding: 20, 
					justifyContent: "space-between !important", 
					alignItems: `flex-start`
				}}
			>
				<H4>{post.tag}</H4>
				<h2>{post.title}</h2>
				<p>{post.snippet}</p>
				<Row style={{justifyContent: `space-between`}}>
					<div 
						style={{
							height: 38, 
							width: 38, 
							border: `none`, 
							borderRadius: `50%`, 
							background: `#d3d3d3`
						}} 
					/>
					<H4>{post.readTime}</H4>
				</Row>
			</Col>
		</Row>
	</Container>
)

export default LargePost;

const mediaQueries = {
    med: '@media only screen and (max-width: 1200px)',
    small: '@media only screen and (max-width: 900px)',
    phone: '@media only screen and (max-width: 600px)',
}

const Container = glamorous.div({
	height: 350,
	width: `60vw`,
	maxWidth: 1000,
	color: `black`,
	borderRadius: `3px`,
	cursor: `pointer`,
	transition: `all .35s ease-in-out`,
	webkitBoxShadow: ` -1px 3px 26px -1px rgba(0,0,0,0.75)`,
	mozBoxShadow: ` -1px 3px 26px -1px rgba(0,0,0,0.75)`,
	oBoxShadow: ` -1px 3px 26px -1px rgba(0,0,0,0.75)`,
	boxShadow: ` -1px 3px 26px -1px rgba(0,0,0,0.75)`,	
	'&:hover': {
		webkitTransform: `scale(1.02)`,
		mozTransform: `scale(1.02)`,
		oTransform: `scale(1.02)`,
		transform: `scale(1.02)`
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

const Col = glamorous.div({
	display: `flex`,
	flexDirection: `column`,
	justifyContent: `center`,
	alignItems: `center`,
	height: `100%`,
	width: `100%`
})

const PostImage = glamorous.img({
	height: `100%`,
	width: `100%`
})

const H4 = glamorous.h4({
	color: `#738a94`, 
	marginBottom: 25, 
	fontSize: 14,
	[mediaQueries.med]: {
		marginBottom: 5
	}
})