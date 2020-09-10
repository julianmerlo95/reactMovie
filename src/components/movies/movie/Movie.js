import React from 'react';
import {useSelector} from 'react-redux'
import { withRouter } from "react-router-dom";
import Comments from '../../comments/Comments';
import './movie.sass';

function Movie (props) {
  const movie = useSelector((state) => state.movie);

  console.log(movie);
  return (
    <div className="movie">
      <button  className="movie__button"
      onClick={() => props.history.push(`/`)}>
        Volver
      </button>
      {Object.keys(movie).length > 0 ? (
        <div className="movie__item">
          <h1>{movie.Title}</h1>
          <img src={movie.Poster}></img>
          <h3>Year: {movie.Year}</h3>
          <Comments id={movie.imdbID} />
        </div>
      ) : (
        <h2>Error</h2>
      )}
    </div>
  );
}

export default withRouter(Movie);
