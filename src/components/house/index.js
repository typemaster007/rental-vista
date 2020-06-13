import React from "react";
import { Jumbotron, Row, Col, Form, Button } from "react-bootstrap";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import HouseList from "./list/HouseList";

function index() {
  return (
    <>
      <Jumbotron>
        <h1>Aprtments in Toronto</h1>
        <Row className="drawer">
          <Col sm={4} md={4} lg={3}>
            <Row>
              <Col>
                <Form.Label>Min Price</Form.Label>
                <Form.Control type="number" value={""} />
              </Col>
              <Col>
                <Form.Label>Max Price</Form.Label>
                <Form.Control type="number" value={""} />
              </Col>
            </Row>
          </Col>
          <Col sm={4} md={4} lg={3}>
            <Form.Label>Type of Renting Place</Form.Label>
            <Form.Control as="select">
              <option>Any</option>
              <option>Apartment</option>
              <option>House</option>
            </Form.Control>
          </Col>
          <Col md={4} sm={4} lg={3}>
            <Form.Label>Renting Type</Form.Label>
            <Form.Control as="select">
              <option>Any</option>
              <option>Room Sharing</option>
              <option>Whole Place</option>
            </Form.Control>
          </Col>
          <Col md={2} sm={2} lg={1}>
            <Form.Label>Pet Allowed</Form.Label>
            <Form.Check type="switch" id="custom-switch" label="Yes" />
          </Col>
          <Col md={2} sm={2} lg={1}>
            <Button type="submit">Apply</Button>
          </Col>
        </Row>
      </Jumbotron>
      <HouseList />
    </>
  );
}

export default index;
