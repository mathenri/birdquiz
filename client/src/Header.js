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
	                  <NavItem eventKey={1}>Quiz</NavItem>
	                </LinkContainer>
	                <LinkContainer to="/highscore">
	                  <NavItem eventKey={2}>Highscore</NavItem>  
	                </LinkContainer>
	              </Nav>
	            </Navbar>
	          </div>
	        </div>
		);
	}
}

export default Header;