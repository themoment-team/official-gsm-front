import { adminInstance } from './instance';

export const get = async (...args: Parameters<typeof adminInstance.get>) => {
  try {
    const { data } = await adminInstance.get(...args);
    return data;
  } catch (error) {
    throw error;
  }
};

export const post = async <T>(
  ...args: Parameters<typeof adminInstance.post>
) => {
  try {
    await adminInstance.post<T>(...args);
  } catch (error) {
    throw error;
  }
};

export const patch = async <T>(
  ...args: Parameters<typeof adminInstance.patch>
) => {
  try {
    await adminInstance.patch<T>(...args);
  } catch (error) {
    throw error;
  }
};

export const del = async <T>(
  ...args: Parameters<typeof adminInstance.delete>
) => {
  try {
    await adminInstance.delete<T>(...args);
  } catch (error) {
    throw error;
  }
};
