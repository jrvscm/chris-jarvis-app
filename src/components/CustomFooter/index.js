import React from 'react';
import glamorous from 'glamorous';
import { Col, Container, Row, Footer } from 'mdbreact';

class CustomFooter extends React.Component {
    render(){
        return(
            <NoTopMarginFooter color="unique-color-dark" style={{marginTop: "0px !important"}} className="page-footer font-small pt-0">
                <div style={{backgroundColor: '#6534ff'}}>
                    <Container className="text-left">
                        <Row className="py-4 d-flex align-items-center">
                            <Col md="6" lg="5" className="text-center text-md-left mb-4 mb-md-0">
                                <h6 className="mb-0 white-text">Let's get social!</h6>
                            </Col>
                            <Col md="6" lg="7" className="text-center text-md-right">
                                <a href="https://www.facebook.com/chris.jarvis.33" target="_blank" className="fb-ic ml-0"><i className="fa fa-facebook white-text mr-lg-4"> </i></a>
                                <a href="https://github.com/jrvscm" target="_blank" className="github-ic"><i className="fa fa-github white-text mr-lg-4"> </i></a>
                                <a href="https://www.linkedin.com/in/chris-jarvis-dev/" target="_blank" className="li-ic"><i className="fa fa-linkedin white-text mr-lg-4"> </i></a>
                                <a href="https://www.instagram.com/j_a_r_v_1_s/" target="_blank" className="ins-ic"><i className="fa fa-instagram white-text mr-lg-4"> </i></a>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <Container className="mt-5 mb-4 text-center text-md-left">
                    <Row className="mt-3">
                        <Col md="3" lg="4" xl="3" className="mb-4">
                            <h6 className="text-uppercase font-weight-bold"><strong>Chris Jarvis</strong></h6>
                            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: '60px'}}/>
                            <p>Chris Jarvis is a full-stack developer from Wyoming. He specializes in React/Redux and Node.js web Development.</p>
                        </Col>
                        <Col md="2" lg="2" xl="2" className="mb-4">
                            <h6 className="text-uppercase font-weight-bold"><strong>Cool Stuff</strong></h6>
                            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: '60px'}}/>
                            <p><a href="https://mdbootstrap.com/react">MDBootstrap</a></p>
                            <p><a href="https://coreui.io/">COREUI</a></p>
                        </Col>
                        <Col md="4" lg="3" xl="3" className="mb-4">
                            <h6 className="text-uppercase font-weight-bold"><strong>Contact</strong></h6>
                            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: '60px'}}/>
                            <p><i className="fa fa-home mr-3"></i> Gillette, WY 82718, US</p>
                            <p><i className="fa fa-envelope mr-3"></i> chrisjarvisdev@gmail.com</p>
                            <p><i className="fa fa-phone mr-3"></i> + 01 307 680 6321</p>
                        </Col>
                    </Row>
                </Container>
                <div className="footer-copyright text-center">
                    <Container fluid>
                        &copy; {(new Date().getFullYear())} Copyright: <a href="https://chrisjarvis.online"> chrisjarvis.online </a>
                    </Container>
                </div>
            </NoTopMarginFooter>
        );
    }
}

export default CustomFooter;

const NoTopMarginFooter = glamorous(Footer)({
    marginTop: `0!important`
})