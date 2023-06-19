import { clientInstance } from './instance';

export const get = async <T>(...args: Parameters<typeof clientInstance.get>) =>
  await clientInstance.get<T, T>(...args);

export const post = async <T>(
  ...args: Parameters<typeof clientInstance.post>
) => await clientInstance.post<T, T>(...args);

export const patch = async <T>(
  ...args: Parameters<typeof clientInstance.patch>
) => await clientInstance.patch<T, T>(...args);

export const del = async <T>(
  ...args: Parameters<typeof clientInstance.delete>
) => await clientInstance.delete<T, T>(...args);
