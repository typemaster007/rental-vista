import React, {useState} from "react";
import {
  Container,
  Jumbotron,
  Button,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Blog from "./blogs/Blog";
import './index.css'
// import { useState } from "react";

function BlogPage() {
const [city, setCity] = useState("")

  return (
    <React.Fragment>
      <Jumbotron fluid>
        <Container>
          <h1>Blog</h1>
          <p>Learn about new place, food and culture.</p>
          <InputGroup className="justify-content-sm-start m-0 p-0">
            <FormControl
              value={city ? city : null}
              placeholder="Enter City..."
              aria-label="Enter City..."
              onChange={(e) => setCity(e.target.value)}
            />
            <InputGroup.Append>
              <Button>
                <FontAwesomeIcon icon="search" />
              </Button>
            </InputGroup.Append>
          </InputGroup>
        </Container>
      </Jumbotron>
      <Blog city={city}/>
    </React.Fragment>
  );
}

export default BlogPage;
