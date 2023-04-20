import React, { useState } from "react";
import styles from "./NewComment.module.css";
const NewComment = ({ postComment }) => {
  const [formData, setFormData] = useState({ name: "", email: "", body: "" });
  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const submitForm = async(e) => {
    e.preventDefault();
    const msg = await postComment(formData);
    msg && setFormData({ name: "", email: "", body: "" });
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
