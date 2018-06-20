import React, { Component } from 'react';
import { Container, Row, Col, Card, CardBody, Mask, Fa, View, Badge} from 'mdbreact';

const Featured = () =>  {
  const newsStyle={borderBottom: '1px solid #e0e0e0', marginBottom: '1.5rem'}
  return(
    <Container style={{maxWidth: '80%', marginTop: 0, paddingTop: 0}}>
      <h2 style={{padding: 50}} className="h1-responsive font-weight-bold text-center">Section title</h2>
      <p className="dark-grey-text mx-auto mb-5 w-75 text-center">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit id laborum.</p>
      <Row>
        <Col md="12" lg="6">
          <div className="mb-4">
            <View hover rounded className="z-depth-1-half mb-4">
              <img className="img-fluid" src="https://mdbootstrap.com/img/Photos/Slides/1.jpg" alt="Sample image"/>
              <a>
                <Mask overlay="white-slight" className="waves-light"/>
              </a>
            </View>
            <div className="d-flex justify-content-between">
              <a className="deep-orange-text"><h6 className="font-weight-bold"><Fa icon="cutlery" className="pr-2"/>Culinary</h6></a>
              <p className="font-weight-bold dark-grey-text"><Fa icon="clock-o" className="pr-2"/>27/02/2018</p>
            </div>
            <h3 className="font-weight-bold dark-grey-text mb-3 p-0"><a>Title of the news</a></h3>
            <p className="dark-grey-text mb-lg-0 mb-md-5 mb-4">Sed ut perspiciatis unde voluptatem omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae explicabo. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.</p>
          </div>
        </Col>

        <Col md="12" lg="6">
          <div style={newsStyle}>
            <Row>
              <Col md="3">
                <View hover rounded className="z-depth-1-half mb-4">
                  <img className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/img%20(29).jpg" alt="Sample image"/>
                  <a>
                    <Mask overlay="white-slight" className="waves-light"/>
                  </a>
                </View>
              </Col>
              <Col md="9">
                <p className="font-weight-bold dark-grey-text">26/02/2018</p>
                <div className="d-flex justify-content-between">
                  <Col size="11" className="text-truncate pl-0 mb-3">
                    <a className="dark-grey-text">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</a>
                  </Col>
                  <a><Fa icon="angle-double-right"/></a>
                </div>
              </Col>
            </Row>
          </div>

          <div style={newsStyle}>
            <Row>
              <Col md="3">
                <View hover rounded className="z-depth-1-half mb-4">
                  <img className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Food/4-col/img%20(45).jpg" alt="Sample image"/>
                  <a>
                    <Mask overlay="white-slight" className="waves-light"/>
                  </a>
                </View>
              </Col>
              <Col md="9">
                <p className="font-weight-bold dark-grey-text">25/02/2018</p>
                <div className="d-flex justify-content-between">
                  <Col size="11" className="text-truncate pl-0 mb-3">
                    <a className="dark-grey-text">Itaque earum rerum hic tenetur a sapiente delectus</a>
                  </Col>
                  <a><Fa icon="angle-double-right"/></a>
                </div>
              </Col>
            </Row>
          </div>

          <div style={newsStyle}>
            <Row>
              <Col md="3">
                <View hover rounded className="z-depth-1-half mb-4">
                  <img className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/87.jpg" alt="Sample image"/>
                  <a>
                    <Mask overlay="white-slight" className="waves-light"/>
                  </a>
                </View>
              </Col>
              <Col md="9">
                <p className="font-weight-bold dark-grey-text">24/03/2018</p>
                <div className="d-flex justify-content-between">
                  <Col size="11" className="text-truncate pl-0 mb-3">
                    <a className="dark-grey-text">Soluta nobis est eligendi optio cumque nihil impedit quo minus</a>
                  </Col>
                  <a><Fa icon="angle-double-right"/></a>
                </div>
              </Col>
            </Row>
          </div>

          <div className="mb-4">
            <Row>
              <Col md="3">
                <View hover rounded className="z-depth-1-half mb-4">
                  <img className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/img%20(27).jpg" alt="Sample image"/>
                  <a>
                    <Mask overlay="white-slight" className="waves-light"/>
                  </a>
                </View>
              </Col>
              <Col md="9">
                <p className="font-weight-bold dark-grey-text">23/02/2018</p>
                <div className="d-flex justify-content-between">
                  <Col size="11" className="text-truncate pl-0 mb-3">
                    <a className="dark-grey-text">Duis aute irure dolor in reprehenderit in voluptate</a>
                  </Col>
                  <a><Fa icon="angle-double-right"/></a>
                </div>
              </Col>
            </Row>
          </div>

        </Col>
      </Row>
    </Container>
  );
}

export default Featured;