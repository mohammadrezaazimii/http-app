import React, { useState } from "react";
import styles from "./NewComment.module.css";
const NewComment = () => {
  const [formData, setFormData] = useState({ name: "", email: "", body: "" });
  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const submitForm = (e) => {
    e.preventDefault();
  };
  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={submitForm}>
        <div className={styles.input}>
          <b>
            <label>Name: </label>
          </b>
          <input type="text" name="name" onChange={(e) => changeHandler(e)} />
        </div>
        <div className={styles.input}>
          <b>
            <label>Email: </label>
          </b>
          <input type="text" name="email" onChange={(e) => changeHandler(e)} />
        </div>
        <div className={styles.input}>
          <b>
            <label>Body: </label>
          </b>
          <textarea name="body" onChange={(e) => changeHandler(e)} />
        </div>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default NewComment;
