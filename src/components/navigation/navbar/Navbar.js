import React, { useState } from "react";
import "./Navbar.css";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../../assets/images/logo-light.svg";
import TestModal from "../../../utilities/TestModal";

/**
 * TODO: https://reacttraining.com/react-router/web/guides/scroll-restoration
 */

function NavigationBar(props) {
  const [message, setMessage] = useState({ title: "", body: "", show: false });

  const renderComponent = (msg) => {
    setMessage({
      title: msg.title,
      body: msg.body,
      show: message.show ? false : true,
    });
  };
  return (
    <React.Fragment>
      <Navbar
        className="custom-navbar"
        collapseOnSelect
        variant="dark"
        expand="sm"
        sticky="top"
      >
        <Link className="navbar-brand" to="/">
          <img src={logo} width="130" height="30" alt="" loading="lazy" />
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="/house">House</Nav.Link>
            <Nav.Link href="/payment">Payment</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/blog">Blog</Nav.Link>
            {/* <NavDropdown title="About" id="basic-nav-dropdown">
              <NavDropdown.Item href="/aboutus">About Us</NavDropdown.Item>
              <NavDropdown.Item href="/contactus">Contact Us</NavDropdown.Item>
            </NavDropdown> */}
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link
              eventKey={2}
              className="custom-join"
              onClick={() =>
                props.handleSignUpClick(true)}
                // renderComponent({
                //   title: "Signup Success",
                //   body:
                //     "Congratulations! You have been signup for an amazing service.",
                // })
              // }
            >
              Sign up
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      {message.show && (
        <TestModal message={message} renderComponent={renderComponent} />
      )}
    </React.Fragment>
  );
}

export default NavigationBar;
