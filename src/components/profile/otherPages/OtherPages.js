import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import './OtherPages.css'

function OtherPages(props) {

  return (
    <div className="other-div">
      <h4><FontAwesomeIcon icon="exclamation-circle" size="lg" color="#f7a231" />{props.message.title}</h4>
      <p>{props.message.body}</p>
    </div>
  );
}

export default OtherPages;
