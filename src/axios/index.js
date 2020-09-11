import axios from "axios";

export const request = async (title, type)=>{
  try {
    const response = await axios.get(
      `http://www.omdbapi.com/?s=${title}&type=${type}&apikey=847a6e12`
    );
    const arraySort = response.data.Search.sort((a, b) => b.Year - a.Year);
    return arraySort;
  } catch (err) {
    return err;
  }
}