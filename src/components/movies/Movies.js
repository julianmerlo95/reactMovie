import React, { useEffect, useState } from "react";
import { actionMovie } from "../../redux/action/actionMovie";
import Qualification from "../qualification/Qualification";
import imgNotFound from "../../assets/img/imgNotFound.png";
import {Loading} from '../util/loading/Loading';
import { withRouter } from "react-router-dom";
import Button from "../util/button/Button";
import { useDispatch } from "react-redux";
import { request } from "../../axios/index";
import "./movies.sass";

function Movies(props) {
  const [movies, setMovies] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    request("avenger", "movie").then((response) => setMovies(response));
  }, []);

  const filterHandler = async (movie) => {
    const response = await request(movie, "movie");
    return setMovies(response);
  };

  const reDirectHandler = (movie) => {
    dispatch(actionMovie(movie));
    return props.history.push(`/content`);
  };

  return (
    <div style={{ width: "90%", margin: "0 auto" }}>
      <div>
        <h2 className="movies__title">Movies</h2>
        <h3 className="movies__order">Movies are sorted by date</h3>
        <Button filterHandler={filterHandler} />
      </div>
      <div className="movies">
        {movies && movies.length > 0
          ? movies.map((movie, index) => {
              return (
                <div
                  className="movies__item"
                  key={index}
                  onClick={() => reDirectHandler(movie)}
                >
                  <img
                    alt="img_movies"
                    className="movies__item__img"
                    src={movie.Poster !== "N/A" ? movie.Poster : imgNotFound}
                  ></img>
                  <h5 className="movies__item__title">{movie.Title}</h5>
                  <h5 className="movies__item__year">Year: {movie.Year}</h5>
                  <Qualification id={movie.imdbID} />
                </div>
              );
            })
          : <Loading/>}
      </div>
    </div>
  );
}

export default withRouter(Movies);
