import React , { Component } from 'react';
import glamorous from 'glamorous';
import { withRouter } from 'react-router-dom';
import * as Markdown from 'react-markdown';
import ReactLoading from 'react-loading';
import moment from 'moment';

import Background from '../../images/escheresque.png';
import { Loader } from '../UIElements';
import CodeBlock from './CodeBlock';
import DesktopNav from '../DesktopNav';
import CustomFooter from '../CustomFooter';

class BlogPost extends Component {
  componentDidMount() {
    const { fetchPost, match } = this.props;
    fetchPost(match.params.id)
    window.scrollTo(0,0)
  }

  render() {
    const {
      hidden, 
      setHiddenState, 
      loading,
      post,
      setScrollToContact
    } = this.props;

    if(loading === true || !post) {
      return (
        <Loader>
          <ReactLoading color={'#03337f'} className='overlay-loading' />
        </Loader>
      )
    }

    return(
      <Wrapper>
        <DesktopNav 
          setScrollToContact={setScrollToContact}
          hidden={hidden} 
          setHiddenState={setHiddenState} 
        />
        <Container>  
          <Header>
            <Col>
              <Row>
                <H1>
                  {post.fields.title}
                </H1>
              </Row>
              <Row>
                <H2>Posted on {moment(post.fields.date).format("MMM Do YYYY")}</H2>
              </Row>
              <Row>
                <H2>by {post.fields.author}</H2> 
              </Row>
            </Col>
          </Header>
          <PostBody> 
            <Row>
              <PostImage image={post.fields.image} />
            </Row>
            <Col style={{marginTop: 25}}>
              <GlamorousMarkdown source={post.fields.content} renderers={{code: CodeBlock}} />
            </Col>      
          </PostBody>     
        </Container>
        <CustomFooter />
      </Wrapper>			 
    )
  }
}

export default withRouter(BlogPost);

const mediaQueries = {
    med: '@media only screen and (max-width: 1200px)',
    small: '@media only screen and (max-width: 1000px)',
    phone: '@media only screen and (max-width: 600px)'
}

const PostImage = glamorous.div({
  height: `50vh`,
  width: `100%`,
  borderTopRightRadius: 6,
  borderTopLeftRadius: 6,
}, ({image}) => ({
  backgroundImage: `url(${image})`,
  backgroundPosition: `center center`,
  backgroundSize: `cover`,
  backgroundRepeat: `no-repeat`
}))

const H2 = glamorous.h2({
  fontSize: 20,
  color: `rgba(255, 255, 255, .3)`
})

const PostBody = glamorous.div({
  display: `flex`,
  flexDirection: `column`,
  alignItems: `center`,
  justifyContent: `center`,
  width: `65%`,
  marginTop: -100,
  backgroundColor: '#fff',
  color: `#707070`,
  borderRadius: 6,
  WebkitBoxShadow: ` -1px 3px 26px -1px rgba(0,0,0,0.75)`,
  MozBoxShadow: ` -1px 3px 26px -1px rgba(0,0,0,0.75)`,
  OBoxShadow: ` -1px 3px 26px -1px rgba(0,0,0,0.75)`,
  boxShadow: ` -1px 3px 26px -1px rgba(0,0,0,0.75)`,
  [mediaQueries.small]: {
    width: `85%`
  },
  [mediaQueries.phone]: {
   width: `95%`
  }
})

const GlamorousMarkdown = glamorous(Markdown)({
  width: `100%`,
  marginBottom: 25
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
  justifyContent: `flex-start`
})

const Header = glamorous.div({
  height: `60vh`,
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

const Wrapper = glamorous.div({
})