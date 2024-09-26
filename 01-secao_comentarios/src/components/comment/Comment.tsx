import React from "react";
import "./Comment.css";
import RatingButton from "../ratingButton/RatingButton";
import ProfilePicture from "../profilePicture/ProfilePicture";
import Button from "../button/Button";
import { commentType } from "../../types/commentType";

const Comment = (props: commentType) => {
  return (
    <div
      className={`comment-container ${
        props.subComment && "sub-comment-container"
      }`}
    >
      <div>
        <RatingButton />
      </div>
      <div className="comment-section">
        <div className="comment-section-header">
          <div className="comment-section-user-info">
            <ProfilePicture />
            <div>{props.userName}</div>
            <div className="text">{props.commentDate}</div>
          </div>
          <div>
            <Button label="Reply" iconButton="icons/reply.svg" />
          </div>
        </div>
        <div className="text">{props.comment}</div>
      </div>
    </div>
  );
};

export default Comment;
