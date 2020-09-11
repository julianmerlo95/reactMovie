import { combineReducers } from "redux";
import { reducerMovie, reducerSearchMovie } from "./reducerMovie";

const reducer = combineReducers({
  movie: reducerMovie,
  searchMovie: reducerSearchMovie,
});

export default reducer;
