import { useQuery } from '@tanstack/react-query';

import type { UserInfoType } from 'api/admin';
import { authQueryKeys, authUrl, get } from 'api/admin';

export const useGetUserInfo = () =>
  useQuery<UserInfoType>(authQueryKeys.getUserInfo(), () =>
    get(authUrl.userInfo())
  );
