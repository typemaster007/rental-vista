import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer footer-root">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-6 col-md-4 justify-content-center">
            <h5>RentalVista Inc.</h5>
            <ul className="list-unstyled">
              <Link to="/blog"> <li>Blog</li> </Link>
              <li>About Us</li>
              <li>Developrs</li>
            </ul>
          </div>
          <div className="col-12 col-sm-6 col-md-4 justify-content-center">
            <h5>More</h5>
            <ul className="list-unstyled">
              <Link to="/FAQ"><li>FAQ</li> </Link>
              <li>Privacy</li>
              <li>Terms of Services</li>
            </ul>
          </div>
          <div className="col-12 col-sm col-md-4 justify-content-center">
            <ul className="list-unstyled">
              <li>
                <FontAwesomeIcon icon="phone" className="icon-button" />{" "}
                +1 (123)-456-7890
              </li>
              <li>
              <a href="mailto:confusion@food.net">
                <FontAwesomeIcon icon="envelope" className="icon-button" /> Drop
                a mail
                </a>
              </li>
              <address>
                <li>121 Halifax Street</li>
                <li>Halifax NS, Canada</li>
              </address>
            </ul>
          </div>
        </div>
        <hr />
        <div className="row justify-content-center">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} RentalVista Inc. | All rights
            reserved.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
