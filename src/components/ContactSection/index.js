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
    Input 
} from 'mdbreact';
import { Field, reduxForm, focus } from 'redux-form';

import NavBar from '../NavBar';
import ContactForm from './ContactForm';

class ContactSection extends Component {
  render(){
    return (
      <Container>
        <Row>
          <div className="text-center text-md-left col-md-6 mt-xl-5 mb-5 wow animated slideInLeft">
            <h1 className="display-4 font-weight-bold">Get in Touch!</h1>
            <hr className="hr-light"/>
            <H6 className="mb-4">If you have a project you'd like to discuss, recipes you'd like to share, or absolutely anything else, feel free to fill out the form and send a message my way.</H6>
            <Button outline color="indigo">
              <i className="fa fa-hand-lizard-o mr-lg-4"></i>Hi-Cha!
            </Button>
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

const H6 = glamorous.h6({
  lineHeight: 1.7
})