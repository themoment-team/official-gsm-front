import { useQuery } from '@tanstack/react-query';

import type { UserInfoType } from 'api/admin';
import { authQueryKeys, authUrl, get } from 'api/admin';

export const useGetUserInfo = () =>
  useQuery(authQueryKeys.getUserInfo(), () =>
    get<UserInfoType>(authUrl.userInfo())
  );
