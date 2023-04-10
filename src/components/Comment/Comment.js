import React, { useEffect, useState } from "react";
import styles from "./Comment.module.css";
import axios from "axios";
const Comment = ({ setSelectedId }) => {
  const [comments, setComments] = useState(null);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((response) => setComments(response.data.slice(0, 5)))
      .catch((error) => console.log(error));
  }, []);
  if (!comments) {
    console.log("comment");
    return <div>Loading ...</div>;
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
              <b>Name:</b>
              {comment.name}
            </p>
            <p>
              <b>Email:</b>
              {comment.email}
            </p>
          </div>
        ))}
      </div>
    );
};

export default Comment;
