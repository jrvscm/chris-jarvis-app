import React, { Component } from 'react';
import glamorous from 'glamorous';
import ScaleText from "react-scale-text";
import { Icon } from 'react-icons-kit';
import { facebookSquare } from 'react-icons-kit/fa/facebookSquare';
import { twitterSquare } from 'react-icons-kit/fa/twitterSquare';
import { linkedinSquare } from 'react-icons-kit/fa/linkedinSquare';
import { githubSquare } from 'react-icons-kit/fa/githubSquare';
import { instagram } from 'react-icons-kit/fa/instagram';
import { navicon } from 'react-icons-kit/fa/navicon'


import Beard from '../../images/beard.png';
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
  padding:0,
  marginLeft: 0,
  marginTop:0,
  marginBottom:0,
  marginRight: `auto`,
  transform: `all .35s ease`,
  cursor: `pointer`,
  '&:hover': {
    color: `#F64C72`
  },
  [mediaQueries.phone]:{
    fontSize: 25
  }
})

const Logo = glamorous.img({
  width: 48,
  transform: `all .35s ease`,
  cursor: `pointer`,
  '&:hover': {
    color: `#F64C72`
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

const Hero = ({hidden, setHiddenState}) => (
  <Container>
    <DesktopNav hidden={hidden} setHiddenState={setHiddenState} />
    <TopRow>
      <Logo src={Beard} />
      <GlamorousIcon 
        icon={navicon} 
        size={'32px'}
        onClick={() => {hidden === true ? setHiddenState(false) : setHiddenState(true)} } 
      />
    </TopRow>
    <Row>
      <HeaderContainer>
        <H1>WELCOME TO</H1>
        <H1>CHRISJARVIS.ONLINE</H1>
        <H2>I BUILD THINGS FOR THE WEB</H2>
      </HeaderContainer>      
    </Row>
    <BottomRow>
      <H3>CONTACT</H3>
      <GlamorousIcon icon={instagram} size={'32px'} />
      <GlamorousIcon icon={facebookSquare} size={'32px'} />
      <GlamorousIcon icon={githubSquare} size={'32px'} />
      <GlamorousIcon icon={linkedinSquare} size={'32px'} />
    </BottomRow>
  </Container>
)

export default Hero;

