import React from "react";
import "./RatingButton.css";

type props = {
  likes?: number;
};

const RatingButton = (props: props) => {
  return (
    <button className="rating-button">
      <img src="icons/like.svg" alt="like icon" />
    </button>
  );
};

export default RatingButton;
