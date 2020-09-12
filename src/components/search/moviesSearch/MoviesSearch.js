import React from 'react';
import { actionMovie } from "../../../redux/action/actionMovie";
import Qualification from "../../qualification/Qualification";
import imgNotFound from '../../../assets/img/imgNotFound.png'
import { withRouter } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from 'react-redux';
import './moviesSearch.sass';

function MoviesSearch (props) {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.searchMovie);

  const reDirectHandler = (movie) => {
    dispatch(actionMovie(movie));
    return props.history.push(`/content`);
  };

  return (
    <div>
      <h2 className="movies__title">Movies Search</h2>
      <div className="movies">
        {movies && movies.length > 0 ? (
          movies.map((movie, index) => {
            return (
              <div
                key={index}
                onClick={() => reDirectHandler(movie)}
                className="movies__item">
                <img
                  alt="img_movies"
                  className="movies__item__img"
                  src={movie.Poster !== "N/A" ? movie.Poster : imgNotFound}
                ></img>
                <h5 className="movies__item__title">{movie.Title}</h5>
                <h5 className="movies__item__Year">Year: {movie.Year}</h5>
                <Qualification id={movie.imdbID} />
              </div>
            );
          })
        ) : (
          <h2 className="movies__notfound">¡¡Movie not found, try again!!</h2>
        )}
      </div>
    </div>
  );
}

export default withRouter(MoviesSearch);
