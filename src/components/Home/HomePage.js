import React, { Component } from 'react';
import glamorous from 'glamorous';
import { Mask, Row, Col, Fa, Button, View, Container, FormInline } from 'mdbreact';
import NavBar from '../NavBar';

const GlamorousMdbMask = glamorous(Mask)({
  background: '-moz-linear-gradient(45deg, rgba(42, 27, 161, 0.7), rgba(29, 210, 177, 0.7) 100%)',
  background: '-webkit-linear-gradient(45deg, rgba(42, 27, 161, 0.7), rgba(29, 210, 177, 0.7) 100%)',
  background: '-webkit-gradient(linear, 45deg, from(rgba(42, 27, 161, 0.7)), to(rgba(29, 210, 177, 0.7)))',
  background: '-o-linear-gradient(45deg, rgba(42, 27, 161, 0.7), rgba(29, 210, 177, 0.7) 100%)',
  background: 'linear-gradient(to 45deg, rgba(42, 27, 161, 0.7), rgba(29, 210, 177, 0.7) 100%)'
})

const GlamorousMdbView = glamorous(View)({
  backgroundImage: `https://mdbootstrap.com/img/Photos/Others/architecture.jpg)`,
  backgroundRepeat: `no-repeat`,
  backgroundSize: `cover`,
  backgroundPosition: `center center`,
  height: `100vh`
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
                  <h1 className="h1-responsive font-weight-bold mt-sm-5">Make purchases with our app </h1>
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

