import axios from "axios";

export const instance = axios.create({
  baseURL: "/api/client",
  withCredentials: true,
});
