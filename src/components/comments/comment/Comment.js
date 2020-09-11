import React from 'react';
import './comment.sass';

function Comment({storage}){
  return (
    <div className="comment">
      <h2>Comments</h2>
      {storage ? (
        storage.map((item, index) => {
          return (
            <div className="comment__storage" key={index}>
              <h3 className="comment__storage__name">
                Name: <span>{item.name}</span>
              </h3>
              <h3 className="comment__storage__comment">
                Comment: <span>{item.comment}</span>
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

export default Comment
