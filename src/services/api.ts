import { axiosInstance } from "./axios";

const { get, post, put, delete: destroy } = axiosInstance;

export const api = {
  get,
  post,
  put,
  destroy,
};
