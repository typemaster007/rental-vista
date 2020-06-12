import React, { useState } from "react";

import "./index.css";
import EditProfile from "./editProfile/EditProfile";
import OtherPages from "./otherPages/OtherPages";

const initialMessage = {
  title: "",
  body: "",
  show: false
};

function ProfileManagement() {
  console.log("IN INDEX")
  const [message, setMessage] = useState(initialMessage);

  const handleOnClick = (msg) => {
    setMessage({
      ...msg,
      show: message.title !== "" ? false : true
    });
  }

  return (
    <div>
      <div className="sidebar">
        <a href="" onClick={() => handleOnClick(initialMessage)}>Edit Profile</a>
        <a href="" onClick={() => handleOnClick({ title: "Success!", body: "Your Password has been changed" })}>Reset Password</a>
        <a href=""  onClick={() => handleOnClick({ title: "Sorry!", body: "Currently, you do not have any saved rooms!" })}>Saved Rooms</a>
        <a href=""  onClick={() => handleOnClick({ title: "Sorry!", body: "Currently, you do not have any contact request approved!"})}>Requested Contacts</a>
      </div>
      <div className="container">
      {
        !message.show ?
        <EditProfile /> :
        <OtherPages message={message}  />
      }
      </div>
    </div>
  );
}

export default ProfileManagement;
