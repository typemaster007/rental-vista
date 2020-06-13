import React from "react";
// import axios from "axios";
import {
  Card,
  Row,
  Button,
  Badge,
  Col,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import houses from './HouseData'

import "./HouseList.css";

function HouseList() {
  return (
    <>
      <Row className="container-fluid">
        {houses.map((room) => {
          return (
            <Card
              key={room.id}
              className="col-lg-3 mb-5 ml-5 mr-auto"
              style={{ border: "none" }}
            >
              <Card.Img
                variant="top"
                src={room.image}
                style={{ borderRadius: "10%" }}
              />
              <Card.Body>
                {room.promoted ? (
                  <Card.Title>
                    <Badge variant="danger">Promoted</Badge>
                  </Card.Title>
                ) : (
                  <Badge>
                    <strong></strong>
                  </Badge>
                )}
                <Card.Subtitle className="pt-2" style={{color: "#696969"}}>
                  <Row>
                    <Col>
                      <FontAwesomeIcon icon="star" color="#F7A231" size="md" />
                      {room.rating} / 5
                    </Col>
                    <Col>
                    Reviews: {room.reviews}
                    </Col>
                  </Row>
                </Card.Subtitle>
                <Card.Text className="justify-data pt-1">{room.description}</Card.Text>
                <Card.Text className="pt-1"><strong>${room.rent}</strong>/Month</Card.Text>
                <Button variant="warning">Save Room</Button>
              </Card.Body>
            </Card>
          );
        })}
      </Row>
      )}
    </>
  );
}

export default HouseList;
