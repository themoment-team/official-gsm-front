import axios from "axios";

const instance = axios.create({
  baseURL: "/api/client",
  withCredentials: true,
});

export const get = <T>(...args: Parameters<typeof instance.get>) => {
  return instance.get<T>(...args);
};

export const post = <T>(...args: Parameters<typeof instance.post>) => {
  return instance.post<T>(...args);
};

export const patch = <T>(...args: Parameters<typeof instance.patch>) => {
  return instance.patch<T>(...args);
};

export const del = <T>(...args: Parameters<typeof instance.delete>) => {
  return instance.delete<T>(...args);
};
