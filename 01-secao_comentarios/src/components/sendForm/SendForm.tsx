import React from "react";
import "./SendForm.css";
import Button from "../button/Button";
import ProfilePicture from "../profilePicture/ProfilePicture";

const SendForm = () => {
  return (
    <div className="send-form-container">
      <ProfilePicture />
      <textarea
        className="text-area"
        placeholder="Add a comment..."
        maxLength={213}
      ></textarea>
      <Button
        label="SEND"
        onClick={() => console.log("Hey there I'm a button!")}
      />
    </div>
  );
};

export default SendForm;
