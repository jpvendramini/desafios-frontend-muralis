import React from "react";
import "./ProfilePicture.css";

type props = {
  imgPath?: string;
};

const ProfilePicture = (props: props) => {
  return props.imgPath ? (
    <img src="" alt="profile" className="profile-picture" />
  ) : (
    <div className="profile-picture"></div>
  );
};

export default ProfilePicture;
