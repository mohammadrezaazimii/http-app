import React, { useState } from "react";
import Comment from "../Comment/Comment";
import FullComment from "../FullComment/FullComment";
import NewComment from "../NewComment/NewComment";
import axios from "axios";
import styles from "./Discussion.module.css";

const Discussion = () => {
  const [selectedId, setSelectedId] = useState(null);
  const [comments, setComments] = useState(null);
  const getComments = (comments) => {
    console.log(comments);
    setComments(comments);
  };
  const selectCommentHandler = (id) => {
    setSelectedId(id);
  };
  const deleteComment = (selectedId) => {
    axios
      .delete(`http://localhost:3001/comments/${selectedId}`)
      .then((res) => {
        console.log(res);
        axios
          .get("http://localhost:3001/comments")
          .then((res) => {
            setComments(res.data.slice(0, 5));
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  };
  const postComment = (newComment) => {
    axios
      .post("http://localhost:3001/comments", newComment)
      .then((res) => {
        axios
          .get("http://localhost:3001/comments")
          .then((res) => setComments(res.data.slice(0, 5)))
          .catch((err) => console.log(err));
      })
      .catch((err) => alert(err));
  };
  return (
    <div className={styles.container}>
      <Comment
        setSelectedId={setSelectedId}
        comments={comments}
        getComments={getComments}
      />
      <FullComment
        selectedId={selectedId}
        setSelectedId={selectCommentHandler}
        getComments={getComments}
        deleteComment={deleteComment}
      />
      <NewComment postComment={postComment} />
    </div>
  );
};

export default Discussion;
