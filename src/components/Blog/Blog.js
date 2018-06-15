import React, { Component } from 'react';
import glamorous from 'glamorous';
import { isLoaded } from 'react-redux-firebase';
import { 
  Carousel, 
  CarouselControl, 
  CarouselInner, 
  CarouselItem, 
  CarouselIndicators, 
  CarouselIndicator, 
  Container
} from 'mdbreact';

import NavBar from '../NavBar';
import FeaturedPostsRow from './FeaturedPostsRow';
import CustomFooter from '../Footer';
import './index.css'

class Blog extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.prev = this.prev.bind(this);
    this.state = {
      activeItem: 1,
      maxLength: 3
    };
  }

  next() {
    let nextItem = this.state.activeItem + 1;
    if(nextItem > this.state.maxLength) {
      this.setState({ activeItem: 1 });
    } else {
      this.setState({ activeItem: nextItem });
    }
  }

  prev() {
    let prevItem = this.state.activeItem - 1;
    if(prevItem < 1) {
      this.setState({ activeItem: this.state.maxLength });
    } else {
      this.setState({ activeItem: prevItem });
    }
  }

  goToIndex(item) {
    if (this.state.activeItem !== item) {
      this.setState({
        activeItem: item
      });
    }
  }

  render(){

  const { activeItem } = this.state;
  const {smallPosts, mediumPosts, largePosts, authors} = this.props;

   ///for data target smallPosts.posts to get the posts
 	if(!isLoaded(smallPosts, mediumPosts, largePosts, authors)) {
		return(<div>...Loading</div>)
	}

  return(
  <div>  
    <div>
    	<NavBar />
    	<div id="carousel-wrapper">
      <Container id="inner-container">
        <Carousel
          thumbnails
          activeItem={this.state.activeItem}
          next={this.next}
          className="z-depth-1">
          <CarouselInner>
            <CarouselItem itemId="1">
              <img className="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(88).jpg" alt="First slide" />
            </CarouselItem>
            <CarouselItem itemId="2">
              <img className="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(121).jpg" alt="Second slide" />
            </CarouselItem>
            <CarouselItem itemId="3">
              <img className="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(31).jpg" alt="Third slide" />
            </CarouselItem>
          </CarouselInner>
          <CarouselControl direction="prev" role="button" onClick={() => { this.prev(); }} />
          <CarouselControl direction="next" role="button" onClick={() => { this.next(); }} />
        </Carousel>
      </Container>
    	</div>
    </div>
    <FeaturedPostsRow 
      authors={authors}
      posts={smallPosts}
      rowTitle={"Featured Posts"} 
      logline={"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."} 
    />
    <FeaturedPostsRow authors={authors} posts={smallPosts} />
    <FeaturedPostsRow authors={authors} posts={smallPosts} /> 
    <CustomFooter />
  </div>
    );
  }
}

export default Blog;