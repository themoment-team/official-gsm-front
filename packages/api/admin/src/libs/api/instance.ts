import axios from 'axios';

import { get, authUrl } from 'api/admin';

export const adminInstance = axios.create({
  baseURL: '/api/admin',
  withCredentials: true,
});

adminInstance.interceptors.response.use(
  (response) => {
    if (response.status >= 200 && response.status <= 300) {
      return response.data;
    }

    return Promise.reject(response.data);
  },
  async (error) => {
    if (error.response.status === 401) {
      try {
        await get(authUrl.refresh());
        const { data } = await adminInstance(error.config);
        return data;
      } catch (e) {
        return Promise.reject(e);
      }
    }

    return Promise.reject(error);
  }
);
