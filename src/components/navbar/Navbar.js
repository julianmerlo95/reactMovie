import React from "react";
import Search from "../search/Search";
import "./navbar.sass";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar__title">
        <h1 className="navbar__title__text">
          React Movies
        </h1>
        <Search />
      </div>
    </div>
  );
}

export default Navbar;
