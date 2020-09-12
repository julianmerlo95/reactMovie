import React from "react";
import { useSelector } from "react-redux";
import { withRouter } from "react-router-dom";
import Comments from "../../comments/Comments";
import "./renderContent.sass";

function RenderContent(props) {
  const movie = useSelector((state) => state.movie);

  return (
    <div className="movie">
      <button className="movie__button" onClick={() => props.history.push(``)}>
        Back to home
      </button>
      {Object.keys(movie).length > 0 ? (
        <div className="movie__item">
          <h1>{movie.Title}</h1>
          <img alt="img_render" src={movie.Poster}></img>
          <h3>Year: {movie.Year}</h3>
          <h3>Type: {movie.Type}</h3>
          <Comments id={movie.imdbID} />
        </div>
      ) : (
        <div className="error">
          <h2 className="error__title">Not found content, go back the home!</h2>
        </div>
      )}
    </div>
  );
}

export default withRouter(RenderContent);
