import React from "react";
import "./Navbar.css";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from '../../../assets/images/logo.png';

function NavigationBar() {
  return (
    <Navbar
      className="custom-navbar"
      collapseOnSelect
      expand="sm"
      variant="light"
      sticky="top"
    >
      <Link className="navbar-brand" to="/">
        <img
          src={logo}
          width="130"
          height="30"
          alt=""
          loading="lazy"
        />
      </Link>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="#deets">Login</Nav.Link>
          <Nav.Link eventKey={2} href="#memes" className="custom-join">
            Join for Free
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavigationBar;
