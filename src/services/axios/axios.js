import Axios from "axios";

// lack of JWT token
const instance = Axios.create({
  baseURL: "http://localhost:3000/",
  responseType: "json",
  timeout: 20000,
});

const axios = instance;

export { axios };
