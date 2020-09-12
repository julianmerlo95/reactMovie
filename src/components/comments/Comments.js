import React, { useState } from "react";
import Comment from "./comment/Comment";
import "./comments.sass";

function Comments({ id }) {
  const storage = JSON.parse(localStorage.getItem(id));
  const [showComment, setShowComment] = useState(false);
  const [comment, setComment] = useState({
    name: "",
    comment: "",
    qualification: "",
  });

  const onChangeHandler = (e) => {
    setComment({ ...comment, [e.target.name]: e.target.value });
  };

  const qualificationHandler = (e) => {
    setComment({ ...comment, qualification: e.target.value });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (storage) {
      localStorage.setItem(id, JSON.stringify([...storage, comment]));
      document.getElementById("formComment").reset();
      setShowComment(!showComment);
      return;
    } else {
      localStorage.setItem(id, JSON.stringify([comment]));
      document.getElementById("formComment").reset();
      setShowComment(!showComment);
      return;
    }
  };

  return (
    <div className="comment">
      <form
        id="formComment"
        className="comment__form"
        onSubmit={(e) => onSubmitHandler(e)}>
        <h3>Send Comment this content</h3>
        <div>
          <input
            className="comment__form__input"
            onChange={(e) => onChangeHandler(e)}
            placeholder="Name"
            type="text"
            name="name"
            required/>
        </div>
        <div>
          <textarea
            className="comment__form__area"
            onChange={(e) => onChangeHandler(e)}
            placeholder="Comment"
            type="text"
            name="comment"
            required/>
        </div>
        <div className="comment__qualification">
          <h3>Rate movie: </h3>
          <select
            className="comment__qualification__option"
            onChange={(e) => qualificationHandler(e)}
            required>
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        <button type="submit" className="comment__form__button">
          Comment
        </button>
      </form>
      <Comment storage={storage} />
    </div>
  );
}

export default Comments;
