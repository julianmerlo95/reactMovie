import React from "react";
import MoviesSearch from "../search/moviesSearch/MoviesSearch";
import { useSelector } from "react-redux";
import Movies from "../movies/Movies";
import Series from "../series/Series";
import Header from '../header/Header';

function Content() {
  const movies = useSelector((state) => state.searchMovie);

  return (
    <>
      <Header />
      {Object.keys(movies).length === 0 ? (
        <>
          <Series /> <Movies />
        </>
      ) : (
        <MoviesSearch/>
      )}
    </>
  );
}

export default Content;
