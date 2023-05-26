import axios from "axios";

const instance = axios.create({
  baseURL: "/api/client",
  withCredentials: true,
});

export const get = async (...args: Parameters<typeof instance.get>) => {
  try {
    const { data } = await instance.get(...args);
    return data;
  } catch (error) {
    return error;
  }
};

export const post = async <T>(...args: Parameters<typeof instance.post>) => {
  try {
    await instance.post<T>(...args);
  } catch (error) {
    return error;
  }
};

export const patch = async <T>(...args: Parameters<typeof instance.patch>) => {
  try {
    await instance.patch<T>(...args);
  } catch (error) {
    return error;
  }
};

export const del = async <T>(...args: Parameters<typeof instance.delete>) => {
  try {
    await instance.delete<T>(...args);
  } catch (error) {
    return error;
  }
};
