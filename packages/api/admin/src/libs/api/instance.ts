import axios from 'axios';

export const adminInstance = axios.create({
  baseURL: '/api/admin',
  withCredentials: true,
});
