import React, { Component } from 'react';
import glamorous from 'glamorous';
import { isLoaded } from 'react-redux-firebase';
import Beard from '../../images/beard.png';
import BeardRed from '../../images/beard-red.png';
import LargePost from './LargePost';
//TODO: add Feed container
class Blog extends Component {
  render() {
    return(
      <Container>  
        <Header>
          <Col>
            <Row>
              <Logo />
              <H1>
                BLOG
              </H1>
            </Row>
            <Row>
              <H3>
                SOME CLEVER SHIT ABOUT TECH.
              </H3>
            </Row>
          </Col>
        </Header>
        <div>
          <LargePost />
        </div>
      </Container>
    )
  }
}

export default Blog;

const mediaQueries = {
    med: '@media only screen and (max-width: 1200px)',
    small: '@media only screen and (max-width: 900px)',
    phone: '@media only screen and (max-width: 600px)',
}

const Col = glamorous.div({
  display: `flex`,
  flexDirection: `column`,
  alignItems: `center`,
  justifyContent: `center`,
  width: `80%`
})

const Row = glamorous.div({
  width: `100%`,
  display: `flex`,
  flexDirection: `row`,
  alignItems: `center`,
  justifyContent: `center`
})

const Logo = glamorous.div({
  height: 48,
  width: 48,
  marginRight: 15,
  transition: `all .35s ease`,
  cursor: `pointer`,
  background: `url(${Beard}) center center no-repeat`,
  backgroundSize: `contain`,
  '&:hover': {
    background: `url(${BeardRed}) center center no-repeat`,
    backgroundSize: `contain`
  }
})

const Container = glamorous.div({
  height: `100vh`,
  width: `100vw`,
  display: `flex`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `center`,
  color: `#fff`
})

const Header = glamorous.div({
  height: `50vh`,
  width: `100%`,
  display: `flex`,
  flexDirection: `column`,
  alignItems: `center`,
  justifyContent: `center`,
  backgroundImage: `linear-gradient(135deg,#03337f 0%,#1567bd 100%)`,
  marginBottom: -50
})

const H1 = glamorous.h1({
  fontSize: 80,
  fontWeight: `bold`,
  letterSpacing: -5,
  [mediaQueries.med]:{
    fontSize: 80
  },
  [mediaQueries.small]:{
    fontSize: 60
  },
  [mediaQueries.phone]: {
    fontSize: 35,
    letterSpacing: -2,
  }
})

const H3 = glamorous.h2({
  fontSize: 20,
  color: `rgba(255, 255, 255, .3)`,
  [mediaQueries.med]:{
    fontSize: 50
  },  
  [mediaQueries.small]:{
    fontSize: 40
  },
  [mediaQueries.phone]: {
    fontSize: 20
  }
})
