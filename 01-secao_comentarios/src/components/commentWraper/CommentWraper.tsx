import React from "react";
import "./CommentWraper.css";
import Comment from "../comment/Comment";
import { commentType } from "../../types/commentType";

const CommentWraper = (props: commentType) => {
  return (
    <div className="comment-wraper-container">
      <Comment
        comment={props.comment}
        commentDate={props.commentDate}
        userName={props.userName}
      />
      <div className="sub-comment-wraper-container">
        {props.subComment &&
          props.subComment.map((subComment) => (
            <Comment
              comment={subComment.comment}
              commentDate={subComment.commentDate}
              userName={subComment.userName}
              subComment={props.subComment}
            />
          ))}
      </div>
    </div>
  );
};

export default CommentWraper;
