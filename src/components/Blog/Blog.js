import React, { Component } from 'react';
import glamorous from 'glamorous';
import { isLoaded } from 'react-redux-firebase';
import ReactLoading from 'react-loading'; 
import { Loader } from '../UIElements';

import Background from '../../images/escheresque.png';
import LargePost from './LargePost';
import SmallPost from './SmallPost';
import CustomFooter from '../CustomFooter';
import DesktopNav from '../DesktopNav';

/*
TODO: write two more posts for this
            <DoubleRow>
              <SmallPost 
                id={posts[1].sys.id}
                post={posts[1].fields}
                posts={posts} 
              />
              <SmallPost 
                id={posts[2].sys.id}
                post={posts[2].fields}
                posts={posts} 
              />
            </DoubleRow>
*/

class Blog extends Component {
  componentDidMount() {
    const { fetchPosts } = this.props
    fetchPosts();
    window.scrollTo(0, 0);
  }

  render() {
    const { 
      hidden, 
      setHiddenState,
      loading,
      posts,
      history,
      scrollToContact,
      setScrollToContact 
    } = this.props;
    
    if(loading === true || posts.length < 1) {
      return (
        <Loader>
          <ReactLoading color={'#03337f'} className='overlay-loading' />
        </Loader>
      )
    }///

    //TODO: make loading blog posts more dynamic
    return(
      <Wrapper>
      <DesktopNav 
        setScrollToContact={setScrollToContact}
        scrollToContact={scrollToContact}
        hidden={hidden} 
        setHiddenState={setHiddenState} 
      />
        <Container>  
          <Header>
            <Col>
              <Row>
                <H1>
                  BLOG
                </H1>
              </Row>
            </Col>
          </Header>
          <Feed>
            <Row>
              <LargePost
                id={posts[0].sys.id}
                post={posts[0].fields} 
                posts={posts} 
              />
            </Row>
          </Feed>
        </Container>
        <CustomFooter />
      </Wrapper>
    )
  }
}


export default Blog;

const mediaQueries = {
    med: '@media only screen and (max-width: 1200px)',
    small: '@media only screen and (max-width: 1000px)',
    phone: '@media only screen and (max-width: 600px)',
}

const Wrapper = glamorous.div({
})

const Feed = glamorous.div({
  display: `flex`,
  flexDirection: `column`,
  alignItems: `center`,
  justifyContent: `center`,
  height: `100%`,
  width: `70%`,
  marginTop: -100,
  [mediaQueries.small]: {
    width: `85%`
  },
  [mediaQueries.phone]: {
   width: `95%`
  }
})

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

const DoubleRow = glamorous.div({
  width: `100%`,
  display: `flex`,
  flexDirection: `row`,
  alignItems: `center`,
  justifyContent: `center`,
  [mediaQueries.small]: {
    flexDirection: `column`
  }
})

const Container = glamorous.div({
  backgroundImage: `url(${Background})`,
  height: `100%`,
  width: `100%`,
  paddingBottom: 100,
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