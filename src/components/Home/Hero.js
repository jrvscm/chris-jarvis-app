import React from 'react';
import glamorous from 'glamorous';

import { Col, Row } from '../UIElements';

const Hero = () => (
	<Container>
		<PitchCol>
			<Heading>
				I help web developers go pro &amp; establish rewarding careers in the tech industry.
			</Heading>
			<SubHeading>
				My free career search guide has helped <strong>thousands</strong> of people just like you find their first developer jobs.
				Click the link below to get started. 
			</SubHeading>
			<ListRow>
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
			</ListRow>
			<Button>Click Here</Button>
		</PitchCol>
	</Container>
)

export default Hero;


const mediaQueries = {
  medium: '@media only screen and (max-width: 1200px)',
  phone: '@media only screen and (max-width: 430px)',
}

const Container = glamorous.div({
	position: `relative`,
	display: `flex`,
	flexDirection: `row`,
	justifyContent: `flex-end`,
	alignItems: `center`,
	marginTop: 200,
	marginRight:` 15%`,
	marginLeft: `15%`
})

const PitchCol = glamorous.div({
	position: `relative`,
	display: `flex`,
	flexDirection: `column`,
	justifyContent: `center`,
	alignItems: `center`,
	margin: 5,
	maxWidth: 600
})	

const ListRow = glamorous.div({
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
	width: 300,
	listStyle: `square inside none`
})

const ListItem = glamorous.li({
	margin: 5,
	fontSize: 14,
})

const Button = glamorous.button({
	height: 50,
	width: 300,
	marginTop: 25
})