import axios from 'axios';

import { get, authUrl } from 'api/admin';

export const adminInstance = axios.create({
  baseURL: '/api/admin',
  withCredentials: true,
});

let isRefreshing = false;

adminInstance.interceptors.response.use(
  (response) => {
    if (response.headers['set-cookie']?.includes('refresh_token')) {
      isRefreshing = false;
    }

    if (response.status >= 200 && response.status <= 300) {
      return response.data;
    }

    return Promise.reject(response.data);
  },
  async (error) => {
    if (error.response.status === 401) {
      if (isRefreshing) {
        return adminInstance(error.config);
      }

      isRefreshing = true;

      await get(authUrl.refresh());

      return adminInstance(error.config);
    }

    {
      process.env.NODE_ENV === 'production' && location.replace('/auth/signin');
    }

    return Promise.reject(error);
  }
);
