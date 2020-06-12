import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function OtherPages(props) {
console.log(props)
console.log("IN OTHER")

  return (
    <div>
      <h4><FontAwesomeIcon icon="exclamation-circle" size="lg" color="#f7a231" />{props.message.title}</h4>
      <p>{props.message.body}</p>
    </div>
  );
}

export default OtherPages;
