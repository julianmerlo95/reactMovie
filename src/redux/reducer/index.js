import { combineReducers } from 'redux';
import { reducerMovie } from "./reducerMovie";

const reducer = combineReducers({
  movie: reducerMovie,
});

export default reducer;