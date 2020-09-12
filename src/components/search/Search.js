import React from "react";
import { actionSearchMovie } from "../../redux/action/actionMovie";
import { request } from "../../axios/index";
import { useDispatch } from "react-redux";
import "./search.sass";

function Search() {
  const dispatch = useDispatch();
  let search = "";

  const onChangeHandler = (e) => {
    search = e.target.value;
    return search;
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const response = await request(search, "movie");
    dispatch(actionSearchMovie(response));
    document.getElementById("formSearch").reset();
    return;
  };

  return (
    <div className="submit">
      <form id="formSearch" onSubmit={(e) => onSubmitHandler(e)}>
        <input
          onChange={(e) => onChangeHandler(e)}
          type="text"
          placeholder="Search"
          required/>
        <button>Search</button>
      </form>
    </div>
  );
}

export default Search;
