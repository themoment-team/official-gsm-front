import { clientInstance } from './instance';

export const get = async (...args: Parameters<typeof clientInstance.get>) =>
  await clientInstance.get(...args);

export const post = async <T>(
  ...args: Parameters<typeof clientInstance.post>
) => await clientInstance.post<T>(...args);

export const patch = async <T>(
  ...args: Parameters<typeof clientInstance.patch>
) => await clientInstance.patch<T>(...args);

export const del = async <T>(
  ...args: Parameters<typeof clientInstance.delete>
) => await clientInstance.delete<T>(...args);
