import React, { Component } from 'react';
import { Icon } from 'react-icons-kit';
import {code} from 'react-icons-kit/fa/code'

import { Container, Row, Col, View, Mask, CardBody, Button, Fa, Card } from 'mdbreact';

class RecentProjects extends Component {
  render() {   
    return(
      <Container>
        <section className="text-center" style={{paddingTop: 100, paddingBottom: 100}}>
          <h2 className="h1-responsive font-weight-bold wow slideInRight">Recent Work</h2>
          <p className="grey-text w-responsive mx-auto mb-5 wow slideInRight">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit est laborum.</p>
          <Row className="d-flex justify-content-center">
            <Col md="6" xl="5" className="mb-4  wow slideInLeft">
              <View className="overlay rounded z-depth-2" waves>
                <img src="https://mdbootstrap.com/img/Photos/Others/laptop-sm.jpg" alt="sample photo" className="img-fluid"/>
                <a>
                  <Mask overlay="white-slight"/>
                </a>
              </View>
              <CardBody className="pb-0">
                <a href="" className="green-text"><h5 className="font-weight-bold mt-2 mb-3"><Icon icon={code} /> HTML5, CSS3, React/Redux, Firebase, Node.js, Express</h5></a>
                <h4 className="font-weight-bold mb-3">Mobile Scriptd</h4>
                <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit cupidatat proident voluptatem quia numquam.</p>
                <Button color="success" rounded>View more</Button>
              </CardBody>
            </Col>
            <Col md="6" xl="5" className="mb-4  wow slideInLeft">
              <View className="overlay rounded z-depth-2" waves>
                <img src="https://mdbootstrap.com/img/Photos/Others/images/19.jpg" alt="sample photo" className="img-fluid"/>
                <a>
                  <Mask overlay="white-slight"/>
                </a>
              </View>
              <CardBody className="pb-0">
                <a href="" className="blue-text"><h5 className="font-weight-bold mt-2 mb-3"><Icon icon={code} /> HTML5, CSS3, JavaScript, React/Redux, Enzyme, Node.js, Express, MongoDB</h5></a>
                <h4 className="font-weight-bold mb-3">Habitualize</h4>
                <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit cupidatat proident voluptatem quia numquam.</p>
                <Button color="success" rounded>View more</Button>
              </CardBody>
            </Col>
            <Col md="6" xl="5" className="mb-4 col wow slideInRight">
              <View className="overlay rounded z-depth-2" waves>
                <img src="https://mdbootstrap.com/img/Photos/Others/images/48.jpg" alt="sample photo" className="img-fluid"/>
                <a>
                  <Mask overlay="white-slight"/>
                </a>
              </View>
              <CardBody className="pb-0">
                <a href="" className="brown-text"><h5 className="font-weight-bold mt-2 mb-3"><Icon icon={code} /> HTML5, CSS3, JavaScript, jQuery, Node.js, Express, MongoDB, Mocha, Chai</h5></a>
                <h4 className="font-weight-bold mb-3">Strength Tracker</h4>
                <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit cupidatat proident voluptatem quia numquam.</p>
                <Button color="success" rounded>View more</Button>
              </CardBody>
            </Col>
            <Col md="6" xl="5" className="mb-4 wow slideInRight">
              <View className="overlay rounded z-depth-2" waves>
                <img src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/img (56).jpg" alt="sample photo" className="img-fluid"/>
                <a>
                  <Mask overlay="white-slight"/>
                </a>
              </View>
              <CardBody className="pb-0">
                <a href="" className="cyan-text"><h5 className="font-weight-bold mt-2 mb-3"><Icon icon={code} /> HTML5, CSS3, JavaScript, jQuery</h5></a>
                <h4 className="font-weight-bold mb-3">Brewery Tour</h4>
                <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit cupidatat proident voluptatem quia numquam.</p>
                <Button color="success" rounded>View more</Button>
              </CardBody>
            </Col>
          </Row>
        </section>
      </Container>
    );
  };
}

export default RecentProjects;