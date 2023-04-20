import React, { useEffect, useState } from "react";
import http from "../../services/httpServices";
import styles from "./FullComment.module.css";
import { Dots } from "loading-animations-react";
import { getOneComment } from "../../services/axiosCommend";
const FullComment = ({ selectedId, setSelectedId, deleteComment }) => {
  const [selectedComment, setSelectedComment] = useState(null);

  let renderComponent = "";
  const deleteHandler = () => {
    if (selectedId) {
      deleteComment(selectedId);
      setSelectedId(null);
    }
  };
  useEffect(() => {
    setSelectedComment(null);
    if (selectedId) {
      getOneComment(selectedId)
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
