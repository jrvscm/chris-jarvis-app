import React, { Component } from 'react';
import glamorous from 'glamorous';
import {    
  FormInline, 
  Card, 
  CardBody, 
  Button 
} from 'mdbreact';
import {Field, reduxForm, focus, Register} from 'redux-form';
import {required, nonEmpty, matches, length, isTrimmed} from '../../validators';
import 'whatwg-fetch';

import Input from './Input';

class ContactForm extends Component {
  onSubmit(values) {
    const { reset } = this.props;
    fetch(`/sendmessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: values.name,
        email: values.email,
        message: values.message,
        subscribe: !values.subscribe ? false : values.subscribe
      })
    })
    .then(() => reset())
    .catch((ex) => console.log('parsing failed', ex))
  }

  render() {
    return(
      <form 
        className="ContactForm" 
        onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
        <Card className="dark-grey-text">
          <CardBody className="z-depth-2">
            <h3 className="dark-grey-text text-center"><strong>Write to me:</strong></h3>
            <hr/>
            <Field
              component={Input} 
              icon="user"
              type="text"
              name="name"
              labelName="Your name"
              validate={[required, nonEmpty]}
              warn={required}
            />
           <Field
              component={Input} 
              icon="envelope"
              type="text"
              name="email"
              labelName="Your email"
              validate={[required, nonEmpty]}
              warn={required}
            />
           <Field
              component={Input} 
              icon="pencil"
              type="textarea"
              rows="3"
              name="message"
              labelName="Your message"
              validate={[required, nonEmpty]}
              warn={required}
            />                        
            <div className="text-center mt-3 black-text">
              <Button 
                type="submit" 
                color="indigo"
                disabled={this.props.invalid}
                Register
              >
                  Send
                </Button>
              <hr/>
              <Field
                logger={console.log(this.props)}
                component={Input}
                name="subscribe"
                type="checkbox" 
                id="checkbox" 
                labelName="Subscribe me to the newsletter"
              />
            </div>
          </CardBody>
        </Card>
      </form>
    )
  }
}

export default reduxForm({
    form: 'ContactForm',
    onSubmitFail: (errors, dispatch) =>
      dispatch(focus('ContactForm', Object.keys(errors)[0]))
})(ContactForm);