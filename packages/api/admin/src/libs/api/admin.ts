import { adminInstance } from './instance';

export const del = async <T>(
  ...args: Parameters<typeof adminInstance.delete>
) => await adminInstance.delete<T, T>(...args);

export const get = async <T>(...args: Parameters<typeof adminInstance.get>) =>
  await adminInstance.get<T, T>(...args);

export const patch = async <T>(
  ...args: Parameters<typeof adminInstance.patch>
) => await adminInstance.patch<T, T>(...args);

export const post = async <T>(...args: Parameters<typeof adminInstance.post>) =>
  await adminInstance.post<T, T>(...args);
