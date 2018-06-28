import React, { Component } from 'react';
import glamorous from 'glamorous';
import { withRouter } from 'react-router-dom';
import * as Scroll from 'react-scroll';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import { Icon } from 'react-icons-kit';
import { arrowRight } from 'react-icons-kit/feather/arrowRight';
import { facebookSquare } from 'react-icons-kit/fa/facebookSquare';
import { twitterSquare } from 'react-icons-kit/fa/twitterSquare';
import { linkedinSquare } from 'react-icons-kit/fa/linkedinSquare';
import { githubSquare } from 'react-icons-kit/fa/githubSquare';
import { instagram } from 'react-icons-kit/fa/instagram';
import { navicon } from 'react-icons-kit/fa/navicon'


import Beard from '../../images/beard.png';
import BeardRed from '../../images/beard-red.png';
import HTML from '../../images/html.png';
import DesktopNav from '../DesktopNav';

const mediaQueries = {
    med: '@media only screen and (max-width: 1200px)',
    small: '@media only screen and (max-width: 900px)',
    phone: '@media only screen and (max-width: 600px)',
}

const Row = glamorous.div({
  display: `flex`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  flexWrap: `wrap`,
  alignItems: `center`,
  color: `white`
})  

const TopRow = glamorous.div({
  position: `absolute`,
  top: 0,
  left: 0,
  right: 0,
  margin: 25,
  display: `flex`,
  flexDirection: `row`,
  justifyContent: `space-between`,
  flexWrap: `wrap`,
  alignItems: `center`,
  color: `white`
}) 

const BottomRow = glamorous.div({
  position: `absolute`,
  bottom: 0,
  left: 0,
  right: 0,
  display: `flex`,
  flexDirection: `row`,
  justifyContent: `flex-end`,
  alignItems: `center`,
  color: `white`,
  margin: 25
})    

const Container = glamorous.div({
  position: `relative`,
  height: `100vh`,
  width: `100%`,
  display: `flex`,
  flexDirection: `column`,
  justifyContent: `center`,
  alignItems: `center`,
  backgroundImage: `linear-gradient(135deg,#03337f 0%,#1567bd 100%)`
})       

const H1 = glamorous.h1({
  fontSize: 120,
  fontWeight: `bold`,
  lineHeight: .8,
  letterSpacing: -5,
  '&:nth-child(even)': {
    WebkitBoxShadow: `0px 180px 100px 0px rgba(0,0,0,0.2)`,
    MozBoxShadow: `0px 180px 100px 0px rgba(0,0,0,0.2)`,
    BoxShadow: `0px 180px 100px 0px rgba(0,0,0,0.2)`,
    borderRadius: `50%`
  },
  [mediaQueries.med]:{
    fontSize: 80
  },
  [mediaQueries.small]:{
    fontSize: 60
  },
  [mediaQueries.phone]: {
    fontSize: 35,
    letterSpacing: -2,
  }
})

const H2 = glamorous.h2({
  fontSize: 60,
  color: `rgba(255, 255, 255, .3)`,
  [mediaQueries.med]:{
    fontSize: 50
  },  
  [mediaQueries.small]:{
    fontSize: 40
  },
  [mediaQueries.phone]: {
    fontSize: 20
  }
})

const H3 = glamorous.h3({
  position: `relative`,
  padding:0,
  marginLeft: 0,
  marginTop:0,
  marginBottom:0,
  marginRight: `auto`,
  transform: `all .35s ease`,
  cursor: `pointer`,
  zIndex: 100,
  '&:hover': {
    color: `#F64C72`
  },
  [mediaQueries.phone]:{
    fontSize: 25
  }
})

const Logo = glamorous.div({
  height: 48,
  width: 48,
  transform: `all .35s ease`,
  cursor: `pointer`,
  background: `url(${Beard}) center center no-repeat`,
  backgroundSize: `contain`,
  '&:hover': {
    background: `url(${BeardRed}) center center no-repeat`,
    backgroundSize: `contain`
  }
})

const HeaderContainer = glamorous.div({
  width: `100%`,
})

const GlamorousIcon = glamorous(Icon)({
  transform: `all .35s ease`,
  cursor: `pointer`,
  '&:hover': {
    color: `#F64C72`
  }
})

const ArrowIcon = glamorous(Icon)({
  transform: `all .35s ease !important`,
  cursor: `pointer`,
  color: `#F64C72`,
  marginLeft: 15
})


const Highlighter = glamorous.span({
  transform: `all .35s ease`,
  '&:hover': {
    color: `#F64C72`
  }
})

const A = glamorous.a({
  textDecoration: `none`,
  color: `white`
})

class Hero extends Component { 
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

  render() {
  
  const { hidden, setHiddenState, history } = this.props;
  const { arrowClasses } = this.state;

  return ( 
  <Container>
    <DesktopNav hidden={hidden} setHiddenState={setHiddenState} />
    <TopRow>
      <Logo />
      <GlamorousIcon
        style={{position: `fixed`, top: 25, right: 25, zIndex: 200}} 
        icon={navicon} 
        size={'32px'}
        onClick={() => {hidden === true ? setHiddenState(false) : setHiddenState(true)} } 
      />
    </TopRow>
    <Row>
      <HeaderContainer>
        <H1>WELCOME TO</H1>
        <H1>CHRISJARVIS.ONLINE</H1>
        <H2>
          <Highlighter>I </Highlighter> 
          <Highlighter>B</Highlighter>
          <Highlighter>U</Highlighter>
          <Highlighter>I</Highlighter>
          <Highlighter>L</Highlighter>
          <Highlighter>D </Highlighter>
          <Highlighter>T</Highlighter>
          <Highlighter>H</Highlighter>
          <Highlighter>I</Highlighter>
          <Highlighter>N</Highlighter>
          <Highlighter>G</Highlighter>
          <Highlighter>S </Highlighter>
          <Highlighter>F</Highlighter>
          <Highlighter>O</Highlighter>
          <Highlighter>R </Highlighter>
          <Highlighter>T</Highlighter>
          <Highlighter>H</Highlighter>
          <Highlighter>E </Highlighter>
          <Highlighter>W</Highlighter>
          <Highlighter>E</Highlighter>
          <Highlighter>B</Highlighter>
        </H2>
      </HeaderContainer>      
    </Row>
    <BottomRow>
      <Row style={{marginRight: `auto`}}>
        <Link to="contact-anchor" spy={true} smooth={true} duration={500}>
          <H3 
            onMouseEnter={() => this.setState({arrowClasses: 'animated fadeInLeft'}) }
            onMouseOut={() => this.setState({arrowClasses: 'animated fadeOutLeft white-text'})}
          >
            CONTACT 
          </H3>
        </Link>
        <ArrowIcon
          className={arrowClasses} 
          icon={arrowRight} 
          size={'32px'}  
        />
      </Row>
      <A href="https://www.instagram.com/j_a_r_v_1_s/" target="_blank"><GlamorousIcon icon={instagram} size={'32px'} /></A>
      <A href="https://www.facebook.com/chris.jarvis.33" target="_blank"><GlamorousIcon icon={facebookSquare} size={'32px'} /></A>
      <A href="https://github.com/jrvscm" target="_blank"><GlamorousIcon icon={githubSquare} size={'32px'} /></A>
      <A href="https://www.linkedin.com/in/chris-jarvis-dev/" target="_blank"><GlamorousIcon icon={linkedinSquare} size={'32px'} /></A>
    </BottomRow>
  </Container>
    )
  }
}


export default withRouter(Hero);
