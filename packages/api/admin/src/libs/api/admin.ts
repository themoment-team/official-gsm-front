import { adminInstance } from './instance';

export const get = async (...args: Parameters<typeof adminInstance.get>) =>
  await adminInstance.get(...args);

export const post = async <T>(...args: Parameters<typeof adminInstance.post>) =>
  await adminInstance.post<T>(...args);

export const patch = async <T>(
  ...args: Parameters<typeof adminInstance.patch>
) => await adminInstance.patch<T>(...args);

export const del = async <T>(
  ...args: Parameters<typeof adminInstance.delete>
) => await adminInstance.delete<T>(...args);
