import React, { Component } from 'react';
import { Container, Row, Col, View, Mask, CardBody, Button, Fa, Card } from 'mdbreact';

class RecentProjects extends Component {
  render() {
   const newsStyle={borderBottom: '1px solid #e0e0e0', marginBottom: '1.5rem'}    
    return(
      <Container>
        <section style={{padding:0, margin:0}} className="text-center">
          <h2 style={{paddingTop: 50, color: `white`}} className="h1-responsive font-weight-bold">Recent Work</h2>
          <p className="grey-text w-responsive mx-auto mb-5">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit est laborum.</p>
          <Row>
            <Col md="12" className="mb-4">
              <Card className="card-image" style={{backgroundImage: 'url(https://mdbootstrap.com/img/Photos/Others/img%20%2832%29.jpg)'}}>
                <div className="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4 rounded">
                  <div>
                    <h6 className="purple-text">
                      <Fa icon="plane"></Fa><strong> Travel</strong>
                    </h6>
                    <h3 className="py-3 font-weight-bold">
                      <strong>This is card title</strong>
                    </h3>
                    <p className="pb-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat fugiat, laboriosam, voluptatem, optio vero odio nam sit officia accusamus minus error nisi architecto nulla ipsum dignissimos. Odit sed qui, dolorum!</p>
                    <Button color="secondary" rounded size="md"><Fa icon="clone" className="left"/> View project</Button>
                  </div>
                </div>
              </Card>
            </Col>
            <Col md="6" className="md-0 mb-4">
              <Card className="card-image" style={{backgroundImage: 'url(https://mdbootstrap.com/img/Photos/Horizontal/Nature/6-col/img%20%2873%29.jpg)'}}>
                <div className="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4 rounded">
                  <div>
                    <h6 className="pink-text">
                      <Fa icon="pie-chart"></Fa><strong> Marketing</strong>
                    </h6>
                    <h3 className="py-3 font-weight-bold">
                      <strong>This is card title</strong>
                    </h3>
                    <p className="pb-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat fugiat, laboriosam, voluptatem, optio vero odio nam sit officia accusamus minus error nisi architecto nulla ipsum dignissimos. Odit sed qui, dolorum!</p>
                    <Button color="pink" rounded size="md"><Fa icon="clone" className="left"/> View project</Button>
                  </div>
                </div>
              </Card>
            </Col>
            <Col md="6" className="md-0 mb-4">
              <Card className="card-image" style={{backgroundImage: 'url(https://mdbootstrap.com/img/Photos/Horizontal/Nature/6-col/img%20%2873%29.jpg)'}}>
                <div className="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4 rounded">
                  <div>
                    <h6 className="green-text">
                      <Fa icon="eye"></Fa><strong> Entertainment</strong>
                    </h6>
                    <h3 className="py-3 font-weight-bold">
                      <strong>This is card title</strong>
                    </h3>
                    <p className="pb-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat fugiat, laboriosam, voluptatem, optio vero odio nam sit officia accusamus minus error nisi architecto nulla ipsum dignissimos. Odit sed qui, dolorum!</p>
                    <Button color="success" rounded size="md"><Fa icon="clone" className="left"/> View project</Button>
                  </div>
                </div>
              </Card>
            </Col>
          </Row>
        </section>
      </Container>
    );
  };
}

export default RecentProjects;