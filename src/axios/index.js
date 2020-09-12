import axios from "axios";

export const request = async (title, type) => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_URL}?title=${title}&type=${type}`
    );
    return response.data.content;
  } catch (err) {
    return err;
  }
};
