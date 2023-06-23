import axios from 'axios';

import { get, authUrl } from 'api/admin';

export const adminInstance = axios.create({
  baseURL: '/api/admin',
  withCredentials: true,
});

let isRefreshing = false;

adminInstance.interceptors.response.use(
  (response) => {
    // eslint-disable-next-line no-console
    console.log(response.headers);

    if (response.headers['set-cookie']?.includes('access_token')) {
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
        await waitRefreshEnd();

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

const waitRefreshEnd = () =>
  new Promise<void>((resolve) => {
    if (isRefreshing === false) {
      resolve();
    } else {
      setTimeout(() => waitRefreshEnd(), 100);
    }
  });
