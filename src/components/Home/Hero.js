import React from 'react';
import glamorous from 'glamorous';

import { Col, Row } from '../UIElements';

const Hero = () => (
	<Container>
		<ImgCol>
			<Portrait src='http://placeholder.pics/svg/500x500' />
		</ImgCol>
		<PitchCol>
			<Heading>
				I help web developers go pro &amp; establish rewarding careers in the tech industry.
			</Heading>
			<SubHeading>
				My free career search guide has helped <strong>thousands</strong> of people just like you find their first developer jobs.
				Click the link below to get started. 
			</SubHeading>
			<InnerRow>
				<Col>
					<List>
						<ListItem>Proven professional templates</ListItem>
						<ListItem>LinkedIn &amp; networking tips</ListItem>
						<ListItem>Coding practice resources</ListItem>
					</List>
				</Col>
				<Col>
					<List>
						<ListItem>Job board master list</ListItem>
						<ListItem>Technical interview prep resources</ListItem>
						<ListItem>Articles, Youtube, Twitch.tv &amp; Podcasts</ListItem>
					</List>
				</Col>
			</InnerRow>
			<Row>
				<Button>Click Here</Button>
			</Row>	
		</PitchCol>
	</Container>
)

export default Hero;


const mediaQueries = {
  medium: '@media only screen and (max-width: 1200px)',
  phone: '@media only screen and (max-width: 430px)',
}

const Portrait = glamorous.img({
	height: 500,
	width: 500,
	marginTop: 100,
	marginBottom: 100,
	[mediaQueries.medium]: {
		width: `100%`
	}
})

const Container = glamorous.div({
	position: `relative`,
	display: `flex`,
	flexDirection: `row`,
	justifyContent: `space-around`,
	alignItems: `center`,
	marginTop: 100,
	paddingRight:` 10%`,
	paddingLeft: `10%`,
	[mediaQueries.medium]: {
		padding: 0
	}
})

const PitchCol = glamorous.div({
	position: `relative`,
	display: `flex`,
	flexDirection: `column`,
	justifyContent: `center`,
	alignItems: `center`,
	marginLeft: 100,
	maxWidth: 600,
	zIndex: 200
})

const ImgCol = glamorous.div({
	position: `relative`,
	display: `flex`,
	flexDirection: `column`,
	justifyContent: `center`,
	alignItems: `center`,
	maxWidth: 600,
	zIndex: 50
})	

const InnerRow = glamorous.div({
	display: `flex`,
	flexDirection: `row`,
	justifyContent: `space-between`,
	alignItems: `center`
})

const Heading = glamorous.h1({
	fontSize: 30,
	margin: 0,
	padding: 0
})

const SubHeading = glamorous.h2({
	fontSize: 14,
	marginTop: 25,
	marginBottom: 25,
	padding:0
})

const List = glamorous.ul({
	margin: 0,
	padding: 0,
	width: `300px`,
	listStyle: `square inside none`
})

const ListItem = glamorous.li({
	margin: 5,
	fontSize: 14
})

const Button = glamorous.button({
	height: 50,
	width: 300,
	margin: 25
})