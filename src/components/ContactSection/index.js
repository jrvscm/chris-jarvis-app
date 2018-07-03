import React, { Component } from 'react';
import glamorous from 'glamorous';
import { 
    Mask, 
    Row, 
    Col, 
    Fa, 
    Button, 
    View, 
    Container, 
    FormInline, 
    Card, 
    CardBody, 
    Input,
    Avatar 
} from 'mdbreact';
import { Field, reduxForm, focus } from 'redux-form';

import ContactForm from './ContactForm';
import GithubPhoto from '../../images/github-profile-photo.jpg';

class ContactSection extends Component {
  render(){
    return (
      <Container>
        <Row>
          <div className="text-center text-md-left col-md-6 mt-xl-5 mb-5 wow animated slideInLeft">
            <H1 className="display-4 font-weight-bold h1-responsive">Get in Touch!</H1>
            <hr className="hr-light"/>            
            <H6 className="mb-4">If you have a project you'd like to discuss, recipes you'd like to share, or absolutely anything else, feel free to fill out the form and send a message my way.</H6>
            <Row className="text-md-left">
              <Col className="mb-5">
                <Col md="6" lg="6" className="float-left">
                  <Avatar src={GithubPhoto} className="mx-auto mb-md-0 mb-4 rounded z-depth-1 img-fluid" tag="img" alt="portrait of chris jarvis"/>
                </Col>
                <Col md="6" lg="6" className="float-right">
                  <h4 className="font-weight-bold mb-3">Chris Jarvis</h4>
                  <h6 className="font-weight-bold grey-text mb-3">Web Developer</h6>
                  <p className="grey-text">Hey there! I'm a web developer from Wyoming. I love building robust web applications with React/Redux and Node. I'm currently looking for my next full-time, remote opportunity.</p>
                </Col>
              </Col>  
            </Row>
          </div>
          <Col md="6" xl="5" className="mb-4 wow animated slideInRight">
            <ContactForm />
          </Col>
        </Row>
      </Container>
    );
  }
};

export default ContactSection;
const mediaQueries = {
  small: '@media only screen and (max-width: 900px)',
}

const H6 = glamorous.h6({
  lineHeight: 1.7
})

const H1 = glamorous.h1({
  [mediaQueries.small]:{
    marginTop: 25
  }
})