import React, { Component } from 'react';
import { Navbar, NavbarBrand, NavbarNav, NavItem, NavLink, NavbarToggler, Collapse, Mask, Row, Col, Fa, Button, View, Container, Card, CardBody, Input, FormInline } from 'mdbreact';

class NavBar extends Component {
  constructor(props) {
    super(props),
    this.state = {
      collapse : false
    }
    this.onClick = this.onClick.bind(this);
    this.handleNavbarClick = this.handleNavbarClick.bind(this);
  }

  onClick(){
    this.setState({
        collapse: !this.state.collapse,
    });
  }

  handleNavbarClick(){
    this.setState({
      collapse: false
    });
  }	
	
	render() {
  const overlay = <div id="sidenav-overlay" style={{backgroundColor: 'transparent'}} onClick={this.handleNavbarClick}/>		
		return(
 			<div>
  			<Navbar dark expand="md" fixed="top" scrolling>
    			<Container>
     			<NavbarBrand>
        			<strong className="white-text">MDB</strong>
      			</NavbarBrand>
      			<NavbarToggler onClick = { this.onClick } />
      			<Collapse isOpen = {this.state.collapse} navbar>
        			<NavbarNav left>
          			<NavItem active>
            			<NavLink to="/">Home</NavLink>
          			</NavItem>
          			<NavItem>
            			<NavLink to="/contact">Contact</NavLink>
          			</NavItem>
          			<NavItem>
            			<NavLink to="/blog">Blog</NavLink>
          			</NavItem>
          			<NavItem>
            			<NavLink to="/resources">Resources</NavLink>
          			</NavItem>
          			<NavItem>
            			<NavLink to="/resources">Portfolio</NavLink>
          			</NavItem>
        			</NavbarNav>
        			<NavbarNav right >
          			<NavItem>
            			<FormInline waves>
              			<div className="md-form my-0">
                			<input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search"/>
              			</div>
            			</FormInline>
          			</NavItem>
        			</NavbarNav>
      			</Collapse>
    			</Container>
  			</Navbar>
				{this.state.collapse && overlay}
			</div>
		)			
	}
}

export default NavBar