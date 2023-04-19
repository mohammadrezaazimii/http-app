import React, { useEffect, useState } from "react";
import { Dots } from "loading-animations-react";
import styles from "./Comment.module.css";
import http from "../../services/http";
import { toast } from "react-toastify";
const Comment = ({ setSelectedId, comments, getComments }) => {
  const [error, setError] = useState(false);
  useEffect(() => {
    http
      .get("/comments")
      .then((response) => {
        getComments(response.data.slice(0, 5));
      })
      .catch((error) => setError(true));
  }, []);
  if (error) {
    toast.error("! اروری در دریافت کامنت ها وجود دارد");
    return (
      <div style={{ margin: "30px auto", color: "red" }}>
        featching data failed!
      </div>
    );
  } else if (!comments) {
    return (
      <div style={{ margin: "20px auto" }}>
        <Dots dotColors={["blueviolet"]} text="" className={styles.loading} />
      </div>
    );
  }
  if (comments)
    return (
      <div className={styles.container}>
        {comments.map((comment) => (
          <div
            className={styles.comment}
            key={comment.id}
            onClick={() => setSelectedId(comment.id)}
          >
            <p>
              <b>Name: </b>
              {comment.name}
            </p>
            <p>
              <b>Email: </b>
              {comment.email}
            </p>
          </div>
        ))}
        <div></div>
      </div>
    );
};

export default Comment;
