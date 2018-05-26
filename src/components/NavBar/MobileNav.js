import React from 'react';
import glamorous from 'glamorous';

import NavButton from './NavButton';
import { Row, Logo } from '../UIElements';

const toggleHiddenState = (props) => {
	const { hidden, setHiddenState } = props;
	const status = hidden === true ? false : true;
	setHiddenState(status)
}

const MobileNav = (props) => (
	<Container>
		<Row>
			<Logo onClick={() => toggleHiddenState(props)}>
			</Logo>
		</Row>
		<Col status={props.hidden}>
			<List status={props.hidden}>
				<NavButton 
					title={`START HERE`}
					subTitle={`NEW HERE? CLICK THIS`}
				/>
				<NavButton 
					title={`ABOUT`}
					subTitle={`WHO I AM?`}
				/>
				<NavButton
					title={`COURSES`}
					subTitle={`COMING SOON`}
				/>		
				<NavButton 
					title={`CONTACT`}
					subTitle={`GET IN TOUCH`}
				/>					
				<NavButton 
					title={`BLOG`}
					subTitle={`I WRITE`}
				/>
				<NavButton 
					title={`RESOURCES`}
					subTitle={`TOOLS OF THE TRADE`}
				/>							
			</List>
		</Col>
	</Container>
)

export default MobileNav;

const Container = glamorous.div({
	height: `auto`
})

const Col = glamorous.div({
	flexDirection: `column`,
	justifyContent: `center`,
	alignItems: `center`,
	transition: `all .25s ease`
}, (props) => ({
	transform: props.status === true ? `translateY(100px)` : null,
	height: props.status === true ? 0 : 100,
}))

const List = glamorous.ul({
	display: `inline-flex`,
	flexDirection: `row`,
	flexWrap: `wrap`,
	alignItems: `center`,
	justifyContent: `center`,
	padding:0,
	margin: 0,
	transition: `all .25s ease`
}, (props) => ({
	display: props.status === true ? `none` : null
}))
