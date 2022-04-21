import axios from "axios";

export const urlCheck = async (url) => {
  const axiosData = await axios.get(`${url}`);
  return axiosData;
};
