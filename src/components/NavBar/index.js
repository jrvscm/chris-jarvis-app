import React, { Component } from 'react';
import glamorous from 'glamorous';
import { Navbar, NavbarBrand, NavbarNav, NavItem, NavLink, NavbarToggler, Collapse, Mask, Row, Col, Fa, Button, View, Container, Card, CardBody, Input, FormInline } from 'mdbreact';
import { withRouter } from 'react-router-dom';
import './index.css';

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
	const { pathname } = this.props.location;
  return(
 		<div id="custom-nav">
  		<Navbar dark expand="md" fixed="top" scrolling>
    		<Container>
     			<NavbarBrand>
        			<strong className="white-text">MDB</strong>
      		</NavbarBrand>
      		<NavbarToggler onClick = { this.onClick } />
      		<Collapse isOpen = {this.state.collapse} navbar>
        		<NavbarNav left>
          		<NavItem className={pathname === '/home' ? 'active' : null}>
            		<NavLink to="/home">Home</NavLink>
          		</NavItem>
          		<NavItem className={pathname === '/contact' ? 'active' : null}>
            		<NavLink to="/contact">Contact</NavLink>
          		</NavItem>
          		<NavItem className={pathname === '/blog' ? 'active' : null}>
            		<NavLink to="/blog">Blog</NavLink>
          		</NavItem>
          		<NavItem className={pathname === '/portfolio' ? 'active' : null}>
            		<NavLink to="/portfolio">Portfolio</NavLink>
          		</NavItem>
        		</NavbarNav>
        		<NavbarNav right>
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

export default withRouter(NavBar)

const CustomNav = glamorous(NavBar)({
  transition: `background .5s ease-in-out,padding .5s ease-in-out`
})