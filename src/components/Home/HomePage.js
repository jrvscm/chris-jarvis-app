import React, { Component } from 'react';
import glamorous from 'glamorous';
import { Container, Card } from 'mdbreact';

import CustomFooter from '../CustomFooter';
import RecentProjects from './RecentProjects';
import Hero from './Hero';
import ContactSection from '../ContactSection';

const GlamorousMdbContainer = glamorous(Container)({
  minHeight: `100vh`,
  minWidth: `100%`,
  margin:0,
  padding:0,
  backgroundRepeat: `no-repeat`,
  backgroundSize: `cover`,
  backgroundPosition: `center center`,
  color: `#707070`,
  display: `flex`,
  flexDirection: `column`,
  alignItems: `center`,
  justifyContent: `center`
})

const GlamorousMdbCard = glamorous(Card)({
  maxHeight: 400,
  maxWidth: 375,
  margin: 15
})

const Wrapper = glamorous.div({
  display: `flex`
})

const HomePage = ({hidden, setHiddenState, scrollToContact, setScrollToContact}) => (
  <div>
    <Hero 
      hidden={hidden} 
      setHiddenState={setHiddenState} 
      scrollToContact={scrollToContact} 
      setScrollToContact={setScrollToContact} 
    />
    <GlamorousMdbContainer style={{backgroundColor:"#E7E3D4"}}>
      <RecentProjects />
    </GlamorousMdbContainer>
    <GlamorousMdbContainer id="contact-anchor" style={{backgroundColor:"#C4DBF6"}}>
        <ContactSection />
    </GlamorousMdbContainer>
    <CustomFooter />                  
  </div>
)

export default HomePage;

