import React, { useState } from "react";
import Comment from "../Comment/Comment";
import FullComment from "../FullComment/FullComment";
import NewComment from "../NewComment/NewComment";
import styles from "./Discussion.module.css";
import { toast } from "react-toastify";
import http from "../../services/httpServices";
import {
  postNewComment,
  getAllComments,
  deleteOneComment,
} from "../../services/axiosCommend";

const Discussion = () => {
  const [selectedId, setSelectedId] = useState(null);
  const [comments, setComments] = useState(null);
  const getComments = (comments) => {
    setComments(comments);
  };
  const selectCommentHandler = (id) => {
    setSelectedId(id);
  };
  const deleteComment = (selectedId) => {
    deleteOneComment(selectedId)
      .then((res) => {
        getAllComments()
          .then((res) => {
            setComments(res.data.slice(0, 5));
            toast.success("کامنت موردنظر با موفقیت حذف شد");
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  };
  const postComment = async (newComment) => {
    try {
      await postNewComment(newComment);
      const { data } = await getAllComments();
      setComments(data.slice(0, 5));
      toast.success("کامنت شما با موفقیت ثبت شد.");
      return 1;
    } catch (error) {
      toast.error(`${error.message}`);
      return 0;
    }
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
