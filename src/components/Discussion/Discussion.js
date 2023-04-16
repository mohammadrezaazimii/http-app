import React, { useState } from "react";
import Comment from "../Comment/Comment";
import FullComment from "../FullComment/FullComment";
import NewComment from "../NewComment/NewComment";
import styles from "./Discussion.module.css";
import axios from "axios";
const Discussion = () => {
  const [selectedId, setSelectedId] = useState(null);
  const [comments, setComments] = useState(null);

  return (
    <div className={styles.container}>
      <Comment
        setSelectedId={setSelectedId}
        comments={comments}
        setComments={setComments}
      />
      <FullComment selectedId={selectedId} setSelectedId={setSelectedId} setComments={setComments} />
      <NewComment setComments={setComments} />
    </div>
  );
};

export default Discussion;
