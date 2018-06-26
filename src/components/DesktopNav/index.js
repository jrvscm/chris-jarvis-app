import React, { Component } from 'react';
import glamorous from 'glamorous';

class DesktopNav extends Component {
	constructor(props) {
		super(props);

		this.state={
			firstLoad: true
		}
	}

	componentWillReceiveProps(props) {
		this.setState({
			firstLoad: false
		})
	}

	render() {
		const { hidden } = this.props;
		const { firstLoad } = this.state;
		const classNames = hidden === true ? 'animated slideOutRight' : 'animated slideInRight';
		
		return(
		<Container hide={firstLoad} className={classNames}>
			<NavList>
				<NavItem><H3>Blog</H3></NavItem>		
				<NavItem><H3>About</H3></NavItem>
				<NavItem><H3>Contact</H3></NavItem>
			</NavList>
		</Container>
		)	
	}
}


export default DesktopNav;

const Container = glamorous.div({
	position: `absolute`,
	right: 0,
	top: 0,
	bottom: 0,
	width: `30%`,
	maxWidth: `350px`,
	backgroundColor: `white`,
	display: `flex`,
	flexDirection: `column`,
	alignItems: `center`,
	justifyContent: `center`,
	backgroundImage: `linear-gradient(135deg,#03337f 0%,#1567bd 100%)`,
}, ({hide}) => ({
	display: hide === true ? `none` : null
}))

const NavList = glamorous.ul({
	height: `100%`,
	width: `100%`,
	display: `flex`,
	flexDirection: `column`,
	justifyContent: `center`,
	alignItems: `center`,
	margin: 0,
	padding:0
})

const NavItem = glamorous.li({
	textAlign: `center`,
	listStyleType: `none`
})

const H3 = glamorous.h3({
	fontSize: 32,
	color: `rgba(255, 255, 255, .3)`
})