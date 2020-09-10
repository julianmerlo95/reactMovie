import React, { useEffect, useState } from "react";
import { actionMovie } from "../../redux/action/actionMovie";
import Qualification from '../qualification/Qualification';
import { withRouter } from "react-router-dom";
import { useDispatch } from "react-redux";
import Navbar from '../navbar/Navbar';
import axios from "axios";
import "./movies.sass";

function Movies(props) {
  const [movies, setMovies] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    searchMovieHandler("avenger").then((response) => {
      setMovies(response.Search);
      return response;
    });
    return;
  }, []);

  const searchMovieHandler = async (title) => {
    try {
      const response = await axios.get(
        `http://www.omdbapi.com/?s=${title}&apikey=847a6e12`
      );
      return response.data;
    } catch (err) {
      return err;
    }
  };

  const reDirectHandler = (movie) => {
    dispatch(actionMovie(movie));
    return props.history.push(`/movie`);
  };
  
  return (
    <div>
      <Navbar />
      <div className="movies">
        {movies && movies.length > 0
          ? movies.map((movie, index) => {
              return (
                <div
                  className="movies__item"
                  key={index}
                  onClick={() => reDirectHandler(movie)}
                >
                  <img className="movies__item__img" src={movie.Poster}></img>
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
