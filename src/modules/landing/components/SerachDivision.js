import React from "react";
import "./SearchDivision.css";
import { InputGroup, FormControl, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SerachDivision() {
  return (
    <div className="custom-padding">
      <div className="responsive-title">
        <h2>RentalVista</h2>
        <h4>Find house where and how you wish...</h4>
      </div>
      <InputGroup className="responsive-search ml-auto mr-auto">
        <FormControl
          placeholder="Enter Location..."
          aria-label="Enter Location..."
        />
        <InputGroup.Append>
          <Button style={{backgroundColor: '#156a7a'}}>
            <FontAwesomeIcon icon="search" className="icon-button" />
          </Button>
        </InputGroup.Append>
      </InputGroup>
    </div>
  );
}

export default SerachDivision;
