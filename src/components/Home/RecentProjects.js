import React, { Component } from 'react';
import { Icon } from 'react-icons-kit';
import {code} from 'react-icons-kit/fa/code'
import { Container, Row, Col, View, Mask, CardBody, Button, Fa, Card } from 'mdbreact';

class RecentProjects extends Component {
  render() {   
    return(
      <Container>
        <section className="text-center" style={{paddingTop: 100, paddingBottom: 100}}>
          <h2 className="h1-responsive font-weight-bold wow slideInLeft">Recent Work</h2>
          <p className="grey-text w-responsive mx-auto mb-5 wow slideInRight">These are some examples of my most recent projects. Feel free to check them out on Github, and from there you can access all the demos. Thanks for looking!</p>
          <Row className="d-flex justify-content-center">
            <Col md="6" xl="5" className="mb-4  wow slideInLeft">
              <View className="overlay rounded z-depth-2" waves>
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1150197/scriptd-screens.png" alt="app screenshots" className="img-fluid"/>
                <a>
                  <Mask overlay="white-slight"/>
                </a>
              </View>
              <CardBody className="pb-0">
                <a href="" className="green-text"><h5 className="font-weight-bold mt-2 mb-3"><Icon icon={code} /> HTML5, CSS3, React/Redux, Firebase, Node.js, Express</h5></a>
                <h4 className="font-weight-bold mb-3">Mobile Scriptd</h4>
                <p>Mobile Scriptd is a script reading and sharing application. It allows users to read movie scripts utilizing a very unique reading experience. Authors and users can make separate profiles and contribute to the community. The app connects script writers with movie producers!</p>
                <a href="https://mobile.scriptd.com" target="_blank"><Button color="success" rounded>View more</Button></a>
              </CardBody>
            </Col>
            <Col md="6" xl="5" className="mb-4  wow slideInRight">
              <View className="overlay rounded z-depth-2" waves>
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1150197/habitualize.png" alt="app snapshots" className="img-fluid"/>
                <a>
                  <Mask overlay="white-slight"/>
                </a>
              </View>
              <CardBody className="pb-0">
                <a href="" className="blue-text"><h5 className="font-weight-bold mt-2 mb-3"><Icon icon={code} /> HTML5, CSS3, JavaScript, React/Redux, Enzyme, Node.js, Express, MongoDB</h5></a>
                <h4 className="font-weight-bold mb-3">Habitualize</h4>
                <p>Habitualize is a full stack habit tracking application, built with React/Redux and Node.js. Habitualize provides users a way to create and track habits they find useful. Progress can be viewed through a current/best streak implementation and personalized charts and statistics.</p>
                <a href="https://github.com/jrvscm/habitualize-client" target="_blank"><Button color="success" rounded>View more</Button></a>
              </CardBody>
            </Col>
            <Col md="6" xl="5" className="mb-4 col wow slideInLeft">
              <View className="overlay rounded z-depth-2" waves>
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1150197/strength-tracker.png" alt="app landing page" className="img-fluid"/>
                <a>
                  <Mask overlay="white-slight"/>
                </a>
              </View>
              <CardBody className="pb-0">
                <a href="" className="brown-text"><h5 className="font-weight-bold mt-2 mb-3"><Icon icon={code} /> HTML5, CSS3, JavaScript, jQuery, Node.js, Express, MongoDB, Mocha, Chai</h5></a>
                <h4 className="font-weight-bold mb-3">Strength Tracker</h4>
                <p>Strength Tracker is a weight lifting tracker that allows users to track their lifts and view their progress in the gym. Users can create an account and track workouts, exercises, set weight, and reps through the user interface. Each exercise is viewable in a line-chart so users can see how they're progressing.</p>
                <a href="https://github.com/jrvscm/strength-tracker" target="_blank"><Button color="success" rounded>View more</Button></a>
              </CardBody>
            </Col>
            <Col md="6" xl="5" className="mb-4 wow slideInRight">
              <View className="overlay rounded z-depth-2" waves>
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1150197/brew.png" alt="app homepage" className="img-fluid"/>
                <a>
                  <Mask overlay="white-slight"/>
                </a>
              </View>
              <CardBody className="pb-0">
                <a href="" className="cyan-text"><h5 className="font-weight-bold mt-2 mb-3"><Icon icon={code} /> HTML5, CSS3, JavaScript, jQuery</h5></a>
                <h4 className="font-weight-bold mb-3">Brewery Tour</h4>
                <p>Brewery tour connects craft beer enthusiasts with their favorite breweries. The app utilizes the BreweryDB API and the GoogleMaps API to create an exploratory, beer finding experience.</p>
               <a href="https://github.com/jrvscm/Brewery-Tour-App" target="_blank"><Button color="success" rounded>View more</Button></a>
              </CardBody>
            </Col>
          </Row>
        </section>
      </Container>
    );
  };
}

export default RecentProjects;