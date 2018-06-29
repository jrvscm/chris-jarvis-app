import React, { Component } from 'react';
import glamorous from 'glamorous';
import { withRouter } from 'react-router-dom';
import { Badge } from 'mdbreact';
import * as Scroll from 'react-scroll';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

const MobileDetect = require('mobile-detect');
const md = new MobileDetect(window.navigator.userAgent);
const isMobile = md.mobile();

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

	componentDidMount() {
    Events.scrollEvent.register('begin', function(to, element) {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register('end', function(to, element) {
      console.log("end", arguments);
    });

    scrollSpy.update();

  }

  componentWillUnmount() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }


	render() {
		const { hidden, setHiddenState, history } = this.props;
		const { firstLoad } = this.state;
		let classNames = hidden === true ? 'animated slideOutRight' : 'animated slideInRight';

		if(isMobile !== null) {
			classNames = hidden === true ? 'animated slideOutUp' : 'animated slideInDown';
		}

		return(
		<Container isMobile={isMobile} hidden={firstLoad} className={classNames}>
			<NavList>
				<NavItem><H3>About </H3><GlamorousBadge>Coming Soon!</GlamorousBadge></NavItem>
				<NavItem><H3>Blog </H3><GlamorousBadge>Coming Soon!</GlamorousBadge></NavItem>		
				<Link onClick={()=> setHiddenState(true)} to="contact-anchor" spy={true} smooth={true} duration={500}>
					<NavItem><H3>Contact</H3></NavItem>
				</Link>			
				<NavItem><H3>Resources </H3><GlamorousBadge>Coming Soon!</GlamorousBadge></NavItem>				
			</NavList>
		</Container>
		)	
	}
}

export default withRouter(DesktopNav);

const GlamorousBadge = glamorous(Badge)({
	fontSize: 8,
	marginLeft: 10,
	marginBottom: 15
})

const Container = glamorous.div({
	position: `fixed`,
	right: 0,
	top: 0,
	padding: 25,
	zIndex: 150,
	maxWidth: `350px`,
	backgroundColor: `white`,
	display: `flex`,
	flexDirection: `column`,
	alignItems: `center`,
	justifyContent: `center`,
	backgroundImage: `linear-gradient(135deg,#03337f 0%,#1567bd 100%)`,
}, ({isMobile}) => ({
	minWidth: isMobile != null ? `100vw` : `auto`,
	bottom: isMobile != null ? `auto` : 0
}))

const NavList = glamorous.ul({
	height: `100%`,
	width: `100%`,
	display: `flex`,
	flexDirection: `column`,
	justifyContent: `center`,
	alignItems: `flex-start`,
	margin: 0,
	padding:0
})

const NavItem = glamorous.li({
	display: `flex`,
	flexDirection: `row`,
	justifyContent: `flex-start`,
	alignItems: `center`,
	listStyleType: `none`,
  transform: `all .35s ease`,
  cursor: `pointer`,
  width: `100%`,
	color: `rgba(255, 255, 255, .3)`,  
  '&:hover': {
    color: `#F64C72`
  },
})

const H3 = glamorous.h3({
	fontSize: 32
})