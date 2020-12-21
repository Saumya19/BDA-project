import { LinkContainer } from 'react-router-bootstrap';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import Routes from './Routes';
import './App.css';

class App extends Component {
	render() {
		return (
			<div className="App container">
				<Navbar fluid collapseOnSelect>
					<Navbar.Header>
						<Navbar.Brand>
							<Link to="/">CRUD OPERATIONS</Link>
						</Navbar.Brand>
						<Navbar.Toggle />
					</Navbar.Header>
					<Navbar.Collapse>
						<Nav pullRight>
							<LinkContainer to="/insert">
								<NavItem>Insert</NavItem>
							</LinkContainer>
							<LinkContainer to="/update">
								<NavItem>Update</NavItem>
							</LinkContainer>
							<LinkContainer to="/delete">
								<NavItem>Delete</NavItem>
							</LinkContainer>
							<LinkContainer to="/create">
								<NavItem>Read</NavItem>
							</LinkContainer>
							<LinkContainer to="/search">
								<NavItem>Search</NavItem>
							</LinkContainer>

						</Nav>
					</Navbar.Collapse>
				</Navbar>
				<Routes />
			</div>
		);
	}
}

export default App;