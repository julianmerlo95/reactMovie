import React from "react";
import Movies from "../movies/Movies";
import Navbar from "../navbar/Navbar";
import Series from "../series/Series";
import { useSelector } from "react-redux";
import MovieSearch from "../search/moviesSearch/MoviesSearch";
import Footer from "../footer/Footer";

function Content() {
  const movies = useSelector((state) => state.searchMovie);

  return (
    <>
      <Navbar />
      {Object.keys(movies).length === 0 ? (
        <>
          <Series /> <Movies />
        </>
      ) : (
        <MovieSearch />
      )}
      <Footer />
    </>
  );
}

export default Content;
