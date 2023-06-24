import axios from 'axios';

import { get, authUrl } from 'api/admin';

export const adminInstance = axios.create({
  baseURL: '/api/admin',
  withCredentials: true,
});

let isRefreshing = false;

/**
 * refresh 요청 도중 refresh 요청 방지 - 같은 refreshToken으로 요청이 되어 발생하는 에러 방지
 */
const waitRefreshEnd = () =>
  new Promise<void>((resolve) => {
    if (isRefreshing === false) {
      resolve();
    } else {
      setTimeout(() => waitRefreshEnd(), 100);
    }
  });

adminInstance.interceptors.response.use(
  (response) => {
    if (response.config.url === authUrl.refresh()) {
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
