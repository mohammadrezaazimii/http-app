import React, { useState } from "react";
import Comment from "../Comment/Comment";
import FullComment from "../FullComment/FullComment";
import NewComment from "../NewComment/NewComment";
import styles from './Discussion.module.css';
const Discussion = () => {
  const [selectedId, setSelectedId] = useState(null);

  return (
    <div className={styles.container}>
      <Comment setSelectedId={setSelectedId} />
      <FullComment selectedId={selectedId} />
      <NewComment />
    </div>
  );
};

export default Discussion;
