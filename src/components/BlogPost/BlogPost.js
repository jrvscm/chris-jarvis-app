import React , { Component } from 'react';
import glamorous from 'glamorous';

import DesktopNav from '../DesktopNav';
import CustomFooter from '../CustomFooter';

const post = {
 	title: 'My First Post',
 	author: 'Chris Jarvis',
 	snippet: `Hey! It's great to have you :). We know that first impressions are important, so we've populated yoru new site with some initial getting started posts taht will help you get started.`,
 	image: 'https://images.unsplash.com/photo-1523978591478-c753949ff840?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c92fa17c403874495c84c6f31f5ef403&auto=format&fit=crop&w=1350&q=80',
 	readTime: '1 MIN READ',
 	tag: 'GETTING STARTED',
 	date: 'May 25, 2018',
 	author: 'Chris Jarvis',
  contentBlock: `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?`
 }


const BlogPost = ({hidden, setHiddenState}) => (
  <Wrapper>
    <DesktopNav 
      hidden={hidden} 
      setHiddenState={setHiddenState} 
    />
    <Container>  
      <Header>
        <Col>
          <Row>
            <H1>
              {post.title}
            </H1>
          </Row>
          <Row>
            <H2>Posted on {post.date}</H2>
          </Row>
          <Row>
            <H2>by {post.author}</H2> 
          </Row>
        </Col>
      </Header>
      <PostBody> 
        <Row>
          <PostImage image={post.image} />
        </Row>
        <Col style={{marginTop: 25}}>
          <h2 style={{marginRight: `auto`}}>This is a great subtitle</h2>
          <p>
            {post.contentBlock}
          </p>
          <h2 style={{marginRight: `auto`}}>This is an even better one</h2>
          <p>
            {post.contentBlock}
          </p>
          <h2 style={{marginRight: `auto`}}>This is an even better one</h2>          
          <p>
            {post.contentBlock}
          </p>
          <h2 style={{marginRight: `auto`}}>This is an even better one</h2>          
          <p>
            {post.contentBlock}
          </p>
        </Col>      
      </PostBody> 
    </Container>
    <CustomFooter />
  </Wrapper>			 
)

export default BlogPost;

const mediaQueries = {
    med: '@media only screen and (max-width: 1200px)',
    small: '@media only screen and (max-width: 1000px)',
    phone: '@media only screen and (max-width: 600px)',
}

const PostImage = glamorous.div({
  height: `30vh`,
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

const Container = glamorous.div({
  height: `100%`,
  width: `100%`,
  marginBottom: 100,
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

const Wrapper = glamorous.div({
})