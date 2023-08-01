import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://bikeindex.org/api/v3/",
});
