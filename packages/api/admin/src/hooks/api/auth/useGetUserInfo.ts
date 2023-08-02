import { useQuery } from '@tanstack/react-query';

import { authQueryKeys, authUrl, get } from 'api/admin';

import type { UserInfoType } from 'types';

import type { UseQueryOptions } from '@tanstack/react-query';

export const useGetUserInfo = (options?: UseQueryOptions<UserInfoType>) =>
  useQuery<UserInfoType>(
    authQueryKeys.getUserInfo(),
    () => get(authUrl.userInfo()),
    options
  );
