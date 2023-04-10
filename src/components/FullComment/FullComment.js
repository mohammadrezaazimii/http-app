import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./FullComment.module.css";
const FullComment = ({ selectedId }) => {
  const [selectedComment, setSelectedComment] = useState(null);
  let renderComponent = "";
  useEffect(() => {
    if (selectedId) {
      axios
        .get(`https://jsonplaceholder.typicode.com/comments/${selectedId}`)
        .then((response) => setSelectedComment(response.data))
        .catch((err) => console.log("error: ", err));
    }
  }, [selectedId]);
  if (!selectedId)
    renderComponent = (
      <div className={styles.choose}>
        Please choose any comment that you like
      </div>
    );
  else if (!selectedComment) {
    renderComponent = <div className={styles.choose}>Loading ...</div>;
  }
  else if (selectedComment)
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
        </div>
      </div>
    );
  return renderComponent;
};

export default FullComment;
