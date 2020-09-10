import React, { useState } from "react";
import "./comments.sass";

function Comments({ id }) {
  let porcentaje = 0;
  const storage = JSON.parse(localStorage.getItem(id));
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
    console.log(comment);
    //TODO: Actualizar cuando se agrega el primero, por que no se hasta que no se actualiza la pagina
    if (storage) {
      localStorage.setItem(id, JSON.stringify([...storage, comment]));
    } else {
      localStorage.setItem(id, JSON.stringify([comment]));
    }
  };

  return (
    <div className="comment">
      <h2>Comments</h2>
      <form className="comment__form" onSubmit={(e) => onSubmitHandler(e)}>
        <div>
          <input
            className="comment__form__input"
            onChange={(e) => onChangeHandler(e)}
            placeholder="Name"
            type="text"
            name="name"
            required
          />
        </div>
        <div>
          <textarea
            className="comment__form__area"
            onChange={(e) => onChangeHandler(e)}
            placeholder="Comment"
            type="text"
            name="comment"
            required
          />
        </div>
        <div className="comment__qualification">
          <h3>Rate movie: </h3>
          <select onChange={(e) => qualificationHandler(e)}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        <button className="comment__form__button">Comment</button>
      </form>
      {storage ? (
        storage.map((item, index) => {
          porcentaje += Number(item.qualification) / storage.length;
          return (
            <div className="comment__storage" key={index}>
              <h3 className="comment__storage__name">Name: {item.name}</h3>
              <h3 className="comment__storage__comment">
                Comment: {item.comment}
              </h3>
            </div>
          );
        })
      ) : (
        <h2>Not comments</h2>
      )}
    </div>
  );
}

export default Comments;
