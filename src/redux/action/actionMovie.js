export const actionMovie = (data) => {
  return {
    type: "SHOW_MOVIE",
    data,
  };
};

export const actionSearchMovie = (data) => {
  return {
    type: "SEARCH_MOVIE",
    data,
  };
};
