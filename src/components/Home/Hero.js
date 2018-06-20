import React, { Component } from 'react';
import glamorous from 'glamorous';
import { Mask, Col, Fa, Button, View, Container, FormInline, Card, CardImage, CardBody, CardTitle, CardText } from 'mdbreact';
import Beard from '../../images/beard.png';
import Brackets from '../../images/brackets.png';
import Css3 from '../../images/css3.png';
import Html from '../../images/html.png';
import Lightbulb from '../../images/lightbulb.png';

import Typer from './Typer';

const GlamorousMdbMask = glamorous(Mask)({
  background: '-moz-linear-gradient(45deg, rgba(42, 27, 161, 0.7), rgba(29, 210, 177, 0.7) 100%)',
  background: '-webkit-linear-gradient(45deg, rgba(42, 27, 161, 0.7), rgba(29, 210, 177, 0.7) 100%)',
  background: '-webkit-gradient(linear, 45deg, from(rgba(42, 27, 161, 0.7)), to(rgba(29, 210, 177, 0.7)))',
  background: '-o-linear-gradient(45deg, rgba(42, 27, 161, 0.7), rgba(29, 210, 177, 0.7) 100%)',
  background: 'linear-gradient(to 45deg, rgba(42, 27, 161, 0.7), rgba(29, 210, 177, 0.7) 100%)'
})

const GlamorousMdbView = glamorous(View)({
  height: `100vh`,
  width: `100vw`
})

const H6 = glamorous.h6({
  lineHeight: 1.7
})

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

const SkillsImg = glamorous.img({
  height: `6rem`,
  width: `6rem`,
  '&:nth-child(even)': {
    webkitTransform: `rotate(20deg)`,
    mozTransform: `rotate(20deg)`,
    msTransform: `rotate(20deg)`,
    oTransform: `rotate(20deg)`,
    transform: `rotate(20deg)`
  },
  '&:nth-child(odd)': {
    webkitTransform: `rotate(-20deg)`,
    mozTransform: `rotate(-20deg)`,
    msTransform: `rotate(-20deg)`,
    oTransform: `rotate(-20deg)`,
    transform: `rotate(-20deg)`
  }      
})

const SkillsRow  = glamorous.div({
  display: `flex`,
  flexDirection: `row`,
  justifyContent: `space-around`,
  alignItems: `center`,
  marginTop: 30,
  marginBottom: 30
})

const GlamorousMdbCard = glamorous(Card)({
  maxHeight: 400,
  maxWidth: 375,
  margin: 15
})

const Row = glamorous.div({
  display: `flex`,
  flexDirection: `row`,
  justifyContent: `center`,
  flexWrap: `wrap`,
  alignItems: `center`
})          

const Hero = () => (
  <GlamorousMdbView>
    <GlamorousMdbMask className="d-flex justify-content-center align-items-center" overlay="light-blue-strong">
    <Container>
      <Row>
        <div className="white-text text-center text-md-left col-md-6 mt-xl-5 mb-5">
          <Typer />
          <hr className="hr-light"/>
          <H6 className="mb-4">Hey my name is Chris. I'm a full stack web developer that specializes in React/Redux and Node.js. I also love working
                  with Firebase and other non relational databases (Mongo). I build modern, clean, web applications that look great on every device. Feel free to check out my portfolio and 
                  read a blog post or two. If you have a project you'd like to discuss, send me a 
                  message from the contact page. I can't wait to hear form you!</H6>
          <Button color="white">Download</Button>
          <Button outline color="white">Learn More</Button>
          <SkillsRow>
            <SkillsImg src={Html} />
            <SkillsImg src={Lightbulb} />
            <SkillsImg src={Css3} />
            <SkillsImg src={Brackets} />
          </SkillsRow>
        </div>
        <Col md="6" xl="5" className="mt-xl-5">
          <img src={Beard} className="img-fluid"/>
        </Col>
        </Row>
      </Container>
    </GlamorousMdbMask>
  </GlamorousMdbView>
)

export default Hero;