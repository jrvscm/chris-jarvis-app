import React, { Component } from 'react';
import glamorous from 'glamorous';
import { Container, Card } from 'mdbreact';
import Typist from 'react-typist';
import Brackets from '../../images/brackets.png';
import Css3 from '../../images/css3.png';
import Html from '../../images/html.png';
import Lightbulb from '../../images/lightbulb.png';

import NavBar from '../NavBar';
import CustomFooter from '../CustomFooter';
import RecentProjects from './RecentProjects';
import Featured from './Featured';
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

const HomePage = ({hidden, setHiddenState}) => (
  <div>
    <Hero hidden={hidden} setHiddenState={setHiddenState} />
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

