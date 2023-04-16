import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./FullComment.module.css";
import { Dots } from "loading-animations-react";
const FullComment = ({ selectedId, setSelectedId, setComments }) => {
  const [selectedComment, setSelectedComment] = useState(null);

  let renderComponent = "";
  const deleteHandler = () => {
    if (selectedId)
      axios
        .delete(`http://localhost:3001/comments/${selectedId}`)
        .then((res) => {
          console.log(res);
          axios
            .get("http://localhost:3001/comments")
            .then((res) => {
              setComments(res.data.slice(0, 5));
              setSelectedId(null);
            })
            .catch((err) => console.log(err));
        })
        .catch((err) => console.log(err));
  };
  useEffect(() => {
    setSelectedComment(null);
    if (selectedId) {
      axios
        .get(`http://localhost:3001/comments/${selectedId}`)
        .then((response) => setSelectedComment(response.data))
        .catch((err) => console.log("error: ", err));
    }
  }, [selectedId]);
  if (!selectedId) {
    renderComponent = (
      <div className={styles.choose}>
        Please choose any comment that you like
      </div>
    );
  } else if (!selectedComment) {
    renderComponent = (
      <div className={styles.choose}>
        <Dots dotColors={["blueviolet"]} text="" className={styles.loading} />
      </div>
    );
  } else if (selectedComment)
    renderComponent = (
      <div className={styles.container}>
        <div className={styles.selectedComment}>
          <p>
            <b>Name: </b>
            {selectedComment.name}
          </p>
          <p>
            <b>Email: </b>
            {selectedComment.email}
          </p>
          <p>{selectedComment.body}</p>
          <button onClick={deleteHandler}>Delete</button>
        </div>
      </div>
    );
  return renderComponent;
};

export default FullComment;
