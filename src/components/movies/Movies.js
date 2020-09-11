import React, { useEffect, useState } from "react";
import { actionMovie } from "../../redux/action/actionMovie";
import Qualification from '../qualification/Qualification';
import { withRouter } from "react-router-dom";
import { useDispatch } from "react-redux";
import {request} from '../../axios/index';
import "./movies.sass";

function Movies(props) {
  const [movies, setMovies] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    request("avenger", "movie").then((response) => {
      setMovies(response.Search);
      return response;
    });
    return;
  }, []);

  const reDirectHandler = (movie) => {
    dispatch(actionMovie(movie));
    return props.history.push(`/content`);
  };
  
  return (
    <div style={{ width: "90%", margin: "0 auto" }}>
      <h2 className="movies__title">Peliculas</h2>
      <div className="movies">
        {movies && movies.length > 0
          ? movies.map((movie, index) => {
              return (
                <div
                  className="movies__item"
                  key={index}
                  onClick={() => reDirectHandler(movie)}>
                  <img alt="img_movies" className="movies__item__img" src={movie.Poster}></img>
                  <h5 className="movies__item__title">{movie.Title}</h5>
                  <Qualification id={movie.imdbID} />
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
}

export default withRouter(Movies);
