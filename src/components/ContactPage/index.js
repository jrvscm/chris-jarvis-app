import React, { Component } from 'react';
import glamorous from 'glamorous';
import { Mask, Row, Col, Fa, Button, View, Container, FormInline, Card, CardBody, Input } from 'mdbreact';
import NavBar from '../NavBar';

class ContactPage extends Component {
  render(){
    return (
      <div>
        <NavBar />
        <GlamorousMdbView>
          <GlamorousMdbMask className="d-flex justify-content-center align-items-center" overlay="indigo-strong">
            <Container>
              <Row>
                <div className="white-text text-center text-md-left col-md-6 mt-xl-5 mb-5">
                  <h1 className="display-4 font-weight-bold">Lorem ipsum </h1>
                  <hr className="hr-light"/>
                  <H6 className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem repellendus quasi fuga nesciunt
                  dolorum nulla magnam veniam sapiente, fugiat! Commodi sequi non animi ea dolor molestiae
                  iste.</H6>
                  <Button outline color="white">Learn More</Button>
                </div>
                <Col md="6" xl="5" className="mb-4">
                  <Card className="dark-grey-text">
                    <CardBody className="z-depth-2">
                      <h3 className="dark-grey-text text-center"><strong>Write to us:</strong></h3>
                      <hr/>
                      <Input label="Your name" icon="user"/>
                      <Input label="Your email" icon="envelope"/>
                      <Input label="Your message" icon="pencil" type="textarea" rows="3"/>
                      <div className="text-center mt-3 black-text">
                        <Button color="indigo">Send</Button>
                        <hr/>
                        <Input type="checkbox" id="checkbox" label="Subscribe me to the newsletter"/>
                      </div>
                    </CardBody>
                  </Card>
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

export default ContactPage;

const GlamorousMdbMask = glamorous(Mask)({
  background: `-moz-linear-gradient(45deg, rgba(42, 27, 161, 0.7), rgba(29, 210, 177, 0.7) 100%)`,
  background: `-webkit-linear-gradient(45deg, rgba(42, 27, 161, 0.7), rgba(29, 210, 177, 0.7) 100%)`,
  background: `-webkit-gradient(linear, 45deg, from(rgba(42, 27, 161, 0.7)), to(rgba(29, 210, 177, 0.7)))`,
  background: `-o-linear-gradient(45deg, rgba(42, 27, 161, 0.7), rgba(29, 210, 177, 0.7) 100%)`,
  background: `linear-gradient(to 45deg, rgba(42, 27, 161, 0.7), rgba(29, 210, 177, 0.7) 100%)`
})

const GlamorousMdbView = glamorous(View)({
  backgroundImage: `url(https://mdbootstrap.com/img/Photos/Others/images/89.jpg)`,
  backgroundRepeat: `no-repeat`,
  backgroundSize: `cover`,
  backgroundPosition: `center center`,
  height: `100vh`
})

const H6 = glamorous.h6({
  lineHeight: 1.7
})