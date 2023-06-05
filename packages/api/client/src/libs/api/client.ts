import { clientInstance } from './instance';

export const get = async (...args: Parameters<typeof clientInstance.get>) => {
  try {
    const { data } = await clientInstance.get(...args);
    return data;
  } catch (error) {
    return error;
  }
};

export const post = async <T>(
  ...args: Parameters<typeof clientInstance.post>
) => {
  try {
    await clientInstance.post<T>(...args);
  } catch (error) {
    return error;
  }
};

export const patch = async <T>(
  ...args: Parameters<typeof clientInstance.patch>
) => {
  try {
    await clientInstance.patch<T>(...args);
  } catch (error) {
    return error;
  }
};

export const del = async <T>(
  ...args: Parameters<typeof clientInstance.delete>
) => {
  try {
    await clientInstance.delete<T>(...args);
  } catch (error) {
    return error;
  }
};
