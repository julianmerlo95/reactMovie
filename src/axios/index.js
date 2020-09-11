import axios from "axios";

export const request = async (title, type) => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_URL}?s=${title}&type=${type}&apikey=${process.env.REACT_APP_KEY}`
    );
    const arraySort = response.data.Search.sort((a, b) => b.Year - a.Year);
    return arraySort;
  } catch (err) {
    return err;
  }
};
