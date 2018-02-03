import React, {Component} from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';

class Header extends Component {
	render() {
		return (
			<div className="row">
	          <div className="col">
	            <Navbar inverse>
	              <Nav>
	                <LinkContainer exact to="/">
	                  <NavItem eventKey={1}>Home</NavItem>
	                </LinkContainer>
	                <LinkContainer to="/Quiz">
	                  <NavItem eventKey={2}>Quiz</NavItem>
	                </LinkContainer>
	                <LinkContainer to="/highscore">
	                  <NavItem eventKey={3}>Highscore</NavItem>  
	                </LinkContainer>
	              </Nav>
	            </Navbar>
	          </div>
	        </div>
		);
	}
}

export default Header;