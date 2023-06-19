import axios from 'axios';

export const clientInstance = axios.create({
  baseURL: '/api/client',
  withCredentials: true,
});

clientInstance.interceptors.response.use((response) => {
  if (response.status >= 200 && response.status <= 300) {
    return response.data;
  }

  return Promise.reject(response.data);
});
