import axios from "axios";

const url = "https://api-agcqapi5sa-uw.a.run.app/api";


const api = axios.create({
  baseURL: url ?? "http://localhost:3333/api",
  // baseURL: "http://172.19.6.83:3333/api",
  // withCredentials: true,
  // headers: {
  //   "Content-Type": "application/json",
  // },
});

export default api;
