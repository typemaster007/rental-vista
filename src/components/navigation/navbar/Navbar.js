import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../../assets/images/logo-light.svg";
import TestModal from "../../../utilities/TestModal";
import axios from 'axios';


function NavigationBar(props) {
  const [message, setMessage] = useState({ title: "", body: "", show: false });
  const [showEdit, setShowEdit] = useState(true);

  useEffect(() => {
    !localStorage.getItem("token") && console.log("true");
    !localStorage.getItem("token") && setShowEdit(false);
    // : setShowEdit(false)
  }, []);

  const renderComponent = (msg) => {
    setMessage({
      title: msg.title,
      body: msg.body,
      show: message.show ? false : true,
    });
  };
  const logout = () => {
    !localStorage.getItem('token') && props.history.push('/')
          axios
        .post("http://localhost:8080/users/logout", {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Request-Method": "POST",
            "Authorization": localStorage.getItem('token')
          },
        })
        .then((response) => {
          console.log(response.data);
          localStorage.clear()
          props.history.push('/')
        })
        .catch((error) => {
          console.log(error);
        });
  }
  return (
    <React.Fragment>
      <Navbar
        className="custom-navbar"
        collapseOnSelect
        variant="dark"
        expand="sm"
        sticky="top"
      >
        <Nav.Link className="navbar-brand" href="/">
          <img src={logo} width="130" height="30" alt="" loading="lazy" />
        </Nav.Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="/house">House</Nav.Link>
            <Nav.Link href="/payment">Payment</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/blog">Blog</Nav.Link>
            <Nav.Link href="/post">Add Post</Nav.Link>
            {/* <NavDropdown title="About" id="basic-nav-dropdown">
              <NavDropdown.Item href="/aboutus">About Us</NavDropdown.Item>
              <NavDropdown.Item href="/contactus">Contact Us</NavDropdown.Item>
            </NavDropdown> */}
            {
            !showEdit ? (
              <>
                <Nav.Link href="/login">Login</Nav.Link>
                <Nav.Link
                  eventKey={2}
                  className="custom-join"
                  onClick={() => props.handleSignUpClick(true)}
                >
                  Sign up
                </Nav.Link>
              </>
            ) : <>
              <Nav.Link href="/edit">Profile</Nav.Link>
              <Nav.Link onClick={logout}>Log Out</Nav.Link>
            </>
            }
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
