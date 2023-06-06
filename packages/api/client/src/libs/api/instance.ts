import axios from 'axios';

export const clientInstance = axios.create({
  baseURL: '/api/client',
  withCredentials: true,
});
