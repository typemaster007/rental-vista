import React, { useState, useEffect } from "react";
import { Image, Row, Col, Button, Form, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import user from "../../../assets/images/user.svg";
import "./EditProfile.css";

/*
TODO: NEED TO SET LAYOUT FOR MD AND SM SCREEN
*/

const initialData = {
  name: "John Doe",
  email: "johndoe@jd.com",
  contact: "1112223345",
  question1: "Lake",
  question2: "Apartment",
  question3: "Yes",
  question4: "Male",
  question5: "Yes",
};

const initialError = {
  nameError: "form-text-hide",
  contactError: "form-text-hide"
}

function EditProfile() {

  const [userData, setUserData] = useState(initialData);
  const [errorClass, setErrorClass] = useState(initialError);

  const handleOnChange = (data) => {

    console.log(data)

    setUserData({
      ...userData,
      ...data
    });
  };

  useEffect(() => {
    let error = {
      nameError: "form-text-hide",
      contactError: "form-text-hide",
    }

    if( userData.name.trim() === "")
    {
      error.nameError = ""
    }
    if(userData.contact.trim() === "" || userData.contact.length  !== 10 || isNaN(userData.contact) ){
      error.contactError = ""
    }

    setErrorClass({...error})
    
  }, [userData.name, userData.contact])

  return (
    <Container>
      <Row>
        <Col
          className="mb-3 personal-detail-col"
          xs={12}
          sm={{ offset: 1, span: 5 }}
          md={{ offset: 2 }}
          lg={{ offset: 2 }}
        >
          <Row className="">
            <Image
              src={user}
              alt="Profile"
              roundedCircle
              className="upload-image"
            />
            <button className="btn m-2 btn-warning">Upload</button>
          </Row>
          <Row className=" mt-3">
            <Form.Group controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                value={userData.name}
                type="name"
                placeholder="Enter fullname"
                onChange={(e) => handleOnChange({name: e.target.value})}
              />
              <Form.Text className={errorClass.nameError}><FontAwesomeIcon icon="exclamation-circle" color="#ff0000" /> Enter Valid Name!</Form.Text>
            </Form.Group>
          </Row>
          <Row className="">
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                value={userData.email}
                type="email"
                placeholder="Enter email"
                readOnly
              />
            </Form.Group>
          </Row>
          <Row className="">
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Contact</Form.Label>
              <Form.Control
                value={userData.contact}
                type="contact"
                placeholder="Contact No."
                onChange={(e) => handleOnChange({contact: e.target.value})}
              />
              <Form.Text className={errorClass.contactError}><FontAwesomeIcon icon="exclamation-circle" color="#ff0000" /> Enter Valid Contact Detail!</Form.Text>
            </Form.Group>
          </Row>
          <Row className="">
            <Button variant="success" type="submit" style={{marginRight: "10vw"}}>
              Save
            </Button>
            <Button variant="secondary" type="submit">
              Cancel
            </Button>
          </Row>
        </Col>
        <Col
          xs={12}
          sm={{ offset: 1, span: 5 }}
          md={{ offset: 1 }}
          lg={{ offset: 1 }}
        >
          <Row className="questions">
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Near to which place you want house?</Form.Label>
              <Form.Control value={userData.question1} as="select">
                <option>Lake</option>
                <option>Forest</option>
                <option>Down Town</option>
              </Form.Control>
            </Form.Group>
          </Row>
          <Row className="questions">
            <Form.Group controlId="formBasicPassword">
              <Form.Label>What do you prefere to rent a room?</Form.Label>
              <Form.Control value={userData.question2} as="select">
                <option>Apartment</option>
                <option>House</option>
              </Form.Control>
            </Form.Group>
          </Row>
          <Row className="questions">
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Would you like to share a room?</Form.Label>
              <Form.Control value={userData.question3} as="select">
                <option>Yes</option>
                <option>No</option>
              </Form.Control>
            </Form.Group>
          </Row>
          <Row className="questions">
            <Form.Group controlId="formBasicPassword">
              <Form.Label>What is gender preference?</Form.Label>
              <Form.Control value={userData.question4} as="select">
                <option>Male</option>
                <option>Female</option>
                <option>Any</option>
              </Form.Control>
            </Form.Group>
          </Row>
          <Row className="questions">
            <Form.Group controlId="formBasicPassword">
              <Form.Label>House with heat and water included?</Form.Label>
              <Form.Control value={userData.question5} as="select">
                <option>Yes</option>
                <option>No</option>
              </Form.Control>
            </Form.Group>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default EditProfile;
