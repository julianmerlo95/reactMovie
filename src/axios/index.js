import axios from "axios";

export const request = async (title, type)=>{
  try {
    const response = await axios.get(
      `http://www.omdbapi.com/?s=${title}&type=${type}&apikey=847a6e12`
    );
    return response.data;
  } catch (err) {
    return err;
  }
}