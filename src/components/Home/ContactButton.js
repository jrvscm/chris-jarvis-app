import React, { Component } from 'react'; 
import glamorous from 'glamorous';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import { Icon } from 'react-icons-kit';
import { arrowRight } from 'react-icons-kit/feather/arrowRight';

const MobileDetect = require('mobile-detect');
const md = new MobileDetect(window.navigator.userAgent);
const isMobile = md.mobile();

class ContactButton extends Component {
  constructor(props) {
    super(props);
  
    this.state={
      arrowClasses: 'invisible'
    }
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

	onMouseEnter() {
  	if(!isMobile) {
    	this.setState({
      	arrowClasses: 'animated slideInLeft'
    	})
  	}
	}

	onMouseOut() {
  	if(!isMobile) {
    	this.setState({
      	arrowClasses: 'animated slideOutLeft'
    	})
  	}
	}

	render() {
		
		const { arrowClasses } = this.state;
		
		return(
		<Container>	
  		<Link to="contact-anchor" spy={true} smooth={true} duration={500}>	
				<H3 
    			onMouseEnter={() => this.onMouseEnter()}
    			onMouseOut={() => this.onMouseOut()}
  			>
    			CONTACT 
  			</H3>
  		</Link>
				<ArrowIcon
  				className={arrowClasses} 
  				icon={arrowRight} 
  				size={'32px'}  
 				/>
		</Container>
		)
	}
}

export default ContactButton;

const mediaQueries = {
    med: '@media only screen and (max-width: 1200px)',
    small: '@media only screen and (max-width: 900px)',
    phone: '@media only screen and (max-width: 600px)',
}

const Container = glamorous.div({
	display: `flex`,
	flexDirection: `row`,
	justifyContent: `center`,
	alignItems: `center`
})

const ArrowIcon = glamorous(Icon)({
  transform: `all .35s ease !important`,
  cursor: `pointer`,
  color: `#F64C72`,
  marginLeft: 15
})

const H3 = glamorous.h3({
  position: `relative`,
  padding:0,
  marginLeft: 0,
  marginTop:0,
  marginBottom:0,
  marginRight: `auto`,
  transition: `all .35s ease`,
  cursor: `pointer`,
  zIndex: 100,
  '&:hover': {
    color: `#F64C72`
  },
  [mediaQueries.phone]:{
    fontSize: 25
  }
})