import React, { useState } from "react";

import "./index.css";
import EditProfile from "./editProfile/EditProfile";
import OtherPages from "./otherPages/OtherPages";

const initialMessage = {
  title: "",
  body: "",
};

function ProfileManagement() {
  const [message, setMessage] = useState(initialMessage);

  const handleOnClick = (msg) => {
    setMessage({
      ...msg,
    });
  };

  return (
    <div>
      <div className="sidebar">
        <button href="" onClick={() => handleOnClick(initialMessage)}>
          Edit Profile
        </button>
        <button
          onClick={() =>
            handleOnClick({
              title: "Success!",
              body: "Your Password has been changed",
            })
          }
        >
          Reset Password
        </button>
        <button
          href=""
          onClick={() =>
            handleOnClick({
              title: "No Saved Rooms!",
              body: "Currently, you do not have any saved rooms!",
            })
          }
        >
          Saved Rooms
        </button>
        <button
          href=""
          onClick={() =>
            handleOnClick({
              title: "Sorry!",
              body: "Currently, you do not have any contact request approved!",
            })
          }
        >
          Requested Contacts
        </button>
      </div>
      <div className="container">
        {
          message.title === "" ? (
            <EditProfile />
          ) : (
            <OtherPages message={message} />
          )
        }
      </div>
    </div>
  );
}

export default ProfileManagement;
