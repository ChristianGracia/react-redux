import React, { Component } from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import "./header.styles.scss";

export default class Header extends Component {
  render() {
    // if (window.location.pathname === '/') return null;
    return (
      <div>
        <Navbar
          collapseOnSelect
          expand="lg"
          className="navbar-inner"
          variant="dark"
          bg="dark"
        >
          <Navbar.Brand href="/">
            <i class="fas fa-home"></i> Home
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <NavDropdown
                title="Services"
                id="collasible-nav-dropdown"
                bg="dark"
              >
                <NavDropdown.Item href="/cable1">cable 1</NavDropdown.Item>
                <NavDropdown.Item href="/cable2">cable 2</NavDropdown.Item>
                <NavDropdown.Item href="/cable3">cable 3</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/othercables">
                  Other cables
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/about">About Us</Nav.Link>
              <Nav.Link href="/form">Configuration Form</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="/contact">Contact</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Login
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
