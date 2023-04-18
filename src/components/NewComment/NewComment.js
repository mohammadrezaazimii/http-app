import React, { useState } from "react";
import styles from "./NewComment.module.css";
import axios from "axios";
const NewComment = ({ postComment }) => {

  const [formData, setFormData] = useState({ name: "", email: "", body: "" });
  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const submitForm = (e) => {
    e.preventDefault();
    postComment(formData);
    setFormData({ name: "", email: "", body: "" });
  };
  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={submitForm}>
        <div className={styles.input}>
          <b>
            <label>Name: </label>
          </b>
          <input
            type="text"
            value={formData.name}
            name="name"
            onChange={(e) => changeHandler(e)}
          />
        </div>
        <div className={styles.input}>
          <b>
            <label>Email: </label>
          </b>
          <input
            type="text"
            value={formData.email}
            name="email"
            onChange={(e) => changeHandler(e)}
          />
        </div>
        <div className={styles.input}>
          <b>
            <label>Body: </label>
          </b>
          <textarea
            name="body"
            value={formData.body}
            onChange={(e) => changeHandler(e)}
          />
        </div>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default NewComment;
