import React, { Component } from 'react';
import glamorous from 'glamorous';
import { Mask, Row, Col, Fa, Button, View, Container, FormInline } from 'mdbreact';
import Typist from 'react-typist';
import Beard from '../../images/beard.png';

import NavBar from '../NavBar';

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
  height: `500px`,
  minWidth: `100vw`,
  margin:0,
  padding:0,
  backgroundColor: `#3f5c80`,
  backgroundRepeat: `no-repeat`,
  backgroundSize: `cover`,
  backgroundPosition: `center center`,
  color: `white`
})

class HomePage extends Component {
  render(){
    return (
        <div>
          <NavBar />
          <GlamorousMdbView>
            <GlamorousMdbMask className="d-flex justify-content-center align-items-center" overlay="light-blue-strong">
            <Container>
              <Row>
                <div className="white-text text-center text-md-left col-md-6 mt-xl-5 mb-5">
                  <Typist cursor={{show: false}}>
                    <span className="h1-responsive font-weight-bold mt-sm-5">Hey my name is Chris.</span>
                    <Typist.Backspace count={21} delay={1000} />
                    <span className="h1-responsive font-weight-bold mt-sm-5">I like to build things.</span>
                    <Typist.Backspace count={23} delay={1000}  />
                    <span className="h1-responsive font-weight-bold mt-sm-5">I build full-stack web applications.</span>
                    <Typist.Backspace count={36} delay={1000}  />
                    <span className="h1-responsive font-weight-bold mt-sm-5">I like React/Redux and Firebase</span>                    
                    <Typist.Backspace count={31} delay={1000}  />
                    <span className="h1-responsive font-weight-bold mt-sm-5">What can I build for you?</span>                    
                  </Typist>
                  <hr className="hr-light"/>
                  <H6 className="mb-4">Hey my name is Chris. I'm a full stack web developer that specializes in React/Redux and Node.js. I also love working
                  with Firebase and other non relational databases (Mongo). I build modern, clean web applications that look great on every device. Feel free to check out my portfolio and 
                  read a blog post or two. If you have a project you'd like to discuss, or you just wanna throw some shade my way, feel free to send me a 
                  message from the contact page. I can't wait to hear form you!</H6>
                  <Button color="white">Download</Button>
                  <Button outline color="white">Learn More</Button>
                </div>
                <Col md="6" xl="5" className="mt-xl-5">
                  <img src={Beard} className="img-fluid"/>
                </Col>
                </Row>
              </Container>
            </GlamorousMdbMask>
          </GlamorousMdbView>

          <GlamorousMdbContainer>
            <Row className="py-5">
              <Col md="12" className="text-center">
              <h1 className="h1-responsive font-weight-bold mt-sm-5">This is an H1 tag yo</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
              </Col>
            </Row>
          </GlamorousMdbContainer>
        </div>
    );
  }
};

export default HomePage;

