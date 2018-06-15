import React from 'react';
import glamorous from 'glamorous';
import { isLoaded } from 'react-redux-firebase';
import { 
	Container,
  Row,
  Col
} from 'mdbreact';

import FeaturedPost from './FeaturedPost';
//TODO: arrange these by row instead of small med and large
const FeaturedPostsRow = ({posts, authors, rowTitle, logline}) => (
	<Container>
    <h2 className="h1-responsive font-weight-bold text-center my-5">{rowTitle}</h2>
    <p className="text-center w-responsive mx-auto mb-5">{logline}</p>
    <Row>
      {
      	Object.keys(posts.posts).map(key => <FeaturedPost key={Math.random()} post={posts[key]} />)
      }
    </Row>  
  </Container>
)

export default FeaturedPostsRow;
