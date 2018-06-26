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

const GlamorousMdbContainer = glamorous(Container)({
  minHeight: `100vh`,
  minWidth: `100vw`,
  margin:0,
  padding:0,
  backgroundRepeat: `no-repeat`,
  backgroundSize: `cover`,
  backgroundPosition: `center center`,
  color: `white`
})

const GlamorousMdbCard = glamorous(Card)({
  maxHeight: 400,
  maxWidth: 375,
  margin: 15
})

const HomePage = ({hidden, setHiddenState}) => (
  <div>
    <Hero hidden={hidden} setHiddenState={setHiddenState} />
    <GlamorousMdbContainer style={{backgroundColor: "#fccdd3", color: "#4f4f4f"}}>
      <RecentProjects />
    </GlamorousMdbContainer>
    <GlamorousMdbContainer style={{backgroundColor: "#bbc4ef", color: "#4f4f4f"}}>
      <Featured />
    </GlamorousMdbContainer>
    <CustomFooter />                  
  </div>
)

export default HomePage;

