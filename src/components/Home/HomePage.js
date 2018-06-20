import React, { Component } from 'react';
import glamorous from 'glamorous';
import { Mask, Row, Col, Fa, Button, View, Container, FormInline, Card, CardImage, CardBody, CardTitle, CardText } from 'mdbreact';
import Typist from 'react-typist';
import Beard from '../../images/beard.png';
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

class HomePage extends Component {
  render(){
    return (
        <div>
          <NavBar />
          <Hero />
          <GlamorousMdbContainer style={{backgroundColor: "#fccdd3", color: "#fccdd3"}}>
            <RecentProjects />
          </GlamorousMdbContainer>
          <GlamorousMdbContainer style={{backgroundColor: "#bbc4ef"}}>
            <Featured />
          </GlamorousMdbContainer>
          <CustomFooter />                  
        </div>
    );
  }
};

export default HomePage;

