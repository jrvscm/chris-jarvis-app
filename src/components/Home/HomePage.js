import React, { Component } from 'react';
import glamorous from 'glamorous';
import { Mask, Row, Col, Fa, Button, View, Container, FormInline } from 'mdbreact';
import Typist from 'react-typist';

import NavBar from '../NavBar';

const GlamorousMdbMask = glamorous(Mask)({
  background: '-moz-linear-gradient(45deg, rgba(42, 27, 161, 0.7), rgba(29, 210, 177, 0.7) 100%)',
  background: '-webkit-linear-gradient(45deg, rgba(42, 27, 161, 0.7), rgba(29, 210, 177, 0.7) 100%)',
  background: '-webkit-gradient(linear, 45deg, from(rgba(42, 27, 161, 0.7)), to(rgba(29, 210, 177, 0.7)))',
  background: '-o-linear-gradient(45deg, rgba(42, 27, 161, 0.7), rgba(29, 210, 177, 0.7) 100%)',
  background: 'linear-gradient(to 45deg, rgba(42, 27, 161, 0.7), rgba(29, 210, 177, 0.7) 100%)'
})

const GlamorousMdbView = glamorous(View)({
  background: `url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/1150197/hands-typing.jpg)`,
  backgroundRepeat: `no-repeat`,
  backgroundSize: `cover`,
  backgroundPosition: `center center`,
  height: `100vh`,
  width: `100vw`
})

const H6 = glamorous.h6({
  lineHeight: 1.7
})

class HomePage extends Component {
  render(){
    return (
        <div>
          <NavBar />
          <GlamorousMdbView>
            <GlamorousMdbMask className="d-flex justify-content-center align-items-center" overlay="indigo-strong">
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
                  <H6 className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem repellendus quasi fuga nesciunt
                  dolorum nulla magnam veniam sapiente, fugiat! Commodi sequi non animi ea dolor molestiae
                  iste.</H6>
                  <Button color="white">Download</Button>
                  <Button outline color="white">Learn More</Button>
                </div>
                <Col md="6" xl="5" className="mt-xl-5">
                  <img src="https://mdbootstrap.com/img/Mockups/Transparent/Small/admin-new.png" className="img-fluid"/>
                </Col>
                </Row>
              </Container>
            </GlamorousMdbMask>
          </GlamorousMdbView>

          <Container>
            <Row className="py-5">
              <Col md="12" className="text-center">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
              </Col>
            </Row>
          </Container>
          </div>
    );
  }
};

export default HomePage;

