import React, { Component } from 'react';
import glamorous from 'glamorous';
import { isLoaded } from 'react-redux-firebase';
import { Carousel, CarouselControl, CarouselInner, CarouselItem, CarouselIndicators, CarouselIndicator, Container } from 'mdbreact';

import NavBar from '../NavBar';
import FeaturedPosts from './FeaturedPosts';
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

   ///for data target smallPosts.posts to get teh posts
 	if(!isLoaded(smallPosts, mediumPosts, largePosts, authors)) {
		return(<div>...Loading</div>)
	}

  return(
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
          <CarouselIndicators>
            <CarouselIndicator img="https://mdbootstrap.com/img/Photos/Others/Carousel-thumbs/img%20(88).jpg" active={activeItem === 1 ? true : false} onClick={() => { this.goToIndex(1); }}></CarouselIndicator>
            <CarouselIndicator img="https://mdbootstrap.com/img/Photos/Others/Carousel-thumbs/img%20(121).jpg" active={activeItem === 2 ? true : false} onClick={() => { this.goToIndex(2); }}></CarouselIndicator>
            <CarouselIndicator img="https://mdbootstrap.com/img/Photos/Others/Carousel-thumbs/img%20(31).jpg" active={activeItem === 3 ? true : false} onClick={() => { this.goToIndex(3); }}></CarouselIndicator>
          </CarouselIndicators>
        </Carousel>
      </Container>
    	</div>
    </div>
    );
  }
}

export default Blog;