import { axios } from "../axios/axios";

export const getListUser = () => {
  return axios.get("user");
};
