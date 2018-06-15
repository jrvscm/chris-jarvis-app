import React from 'react';
import {
	Col, 
  Mask, 
  Fa, 
  View, 
  Button 
} from 'mdbreact';

const FeaturedPost = ({post}) => (
	<Col lg="4" md="12" className="mb-lg-0 mb-4 post-column">
    <View hover className="rounded z-depth-2 mb-4" waves>
      <img className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/81.jpg"/>
      <Mask overlay="white-slight"/>
    </View>
    <a className="pink-text"><h6 className="font-weight-bold mb-3">
    <Fa icon="map" className="pr-2"></Fa>Adventure</h6></a>
    <h4 className="font-weight-bold mb-3"><strong>Title of the news</strong></h4>
    <p>by <a className="font-weight-bold">Billy Forester</a>, 15/07/2018</p>
    <p className="dark-grey-text">Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus voluptas.</p>
    <Button color="pink" rounded size="md">Read more</Button>
  </Col>
)

export default FeaturedPost;