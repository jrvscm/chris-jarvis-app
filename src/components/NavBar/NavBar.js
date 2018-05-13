import React, { Component }from 'react';
import glamorous from 'glamorous';
import colors from '../../colors';
import FaCode from 'react-icons/lib/fa/code';
import { updateDimensions } from '../../actions/navbar';

import NavButton from './NavButton';

class NavBar extends Component {
	componentDidMount() {
		updateDimensions(window.innerWidth)
		window.addEventListener('resize', updateDimensions(window.innerWidth))
	}

	componentWillUnmount() {
		window.removeEventListener('resize', updateDimensions(window.innerWidth))
	}

	render() {
		return(
			<Container>
				<Row>
					<List>
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
					</List>	
					<Logo>
					</Logo>			
					<List>	
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
				</Row>
			</Container>
		)
	}
}

export default NavBar;

const { transparentPurple, slateBlue } = colors;

const Container = glamorous.div({
	position: `fixed`,
	top: 0,
	left: 0,
	right: 0,
	backgroundColor: `${slateBlue}`,
	height: 100,
	display: `flex`,
	flexDirection: `row`,
	alignItems: `center`,
	justifyContent: `center`,
})

const List = glamorous.ul({
	display: `inline-flex`,
	flexDirection: `row`,
	flexWrap: `wrap`,
	alignItems: `center`,
	justifyContent: `center`,
	padding:0,
	margin: 0
})

const Row = glamorous.div({
	display: `flex`,
	flexDirection: `row`,
	justifyContent: `center`,
	alignItems: `center`,
	width: `100%`
})

const Logo = glamorous.div({
	display: `flex`,
	flexDirection: `row`,
	alignItems: `center`,
	justifyContent: `center`,
	minHeight: 80,
	minWidth: 80,
	borderRadius: `50%`,
	margin: 10,
	cursor: `pointer`,
  backgroundColor: `${transparentPurple}`,
})

