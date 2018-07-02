import React, { Component } from 'react';
import glamorous from 'glamorous';
import { withRouter } from 'react-router-dom';
import * as Scroll from 'react-scroll';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import { Icon } from 'react-icons-kit';
import { facebookSquare } from 'react-icons-kit/fa/facebookSquare';
import { twitterSquare } from 'react-icons-kit/fa/twitterSquare';
import { linkedinSquare } from 'react-icons-kit/fa/linkedinSquare';
import { githubSquare } from 'react-icons-kit/fa/githubSquare';
import { instagram } from 'react-icons-kit/fa/instagram';

import Logo from '../UIElements';
import HTML from '../../images/html.png';
import DesktopNav from '../DesktopNav';
import ContactButton from './ContactButton';

const MobileDetect = require('mobile-detect');
const md = new MobileDetect(window.navigator.userAgent);
const isMobile = md.mobile();

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

const HeaderContainer = glamorous.div({
  width: `100%`,
})

const GlamorousIcon = glamorous(Icon)({
  transition: `all .35s ease`,
  cursor: `pointer`,
  '&:hover': {
    color: `#F64C72`
  }
})

const Highlighter = glamorous.span({
  transition: `all .35s ease`,
  '&:hover': {
    color: `#F64C72`
  }
})

const A = glamorous.a({
  textDecoration: `none`,
  color: `white`
})

class Hero extends Component { 
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

  return ( 
  <Container>
    <DesktopNav hidden={hidden} setHiddenState={setHiddenState} />
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
      <ContactButton />
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
