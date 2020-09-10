export const reducerMovie = (state = {}, action) => {
  switch (action.type) {
    case "SHOW_MOVIE":
      return (state = action.data);

    default:
      return state;
  }
}
