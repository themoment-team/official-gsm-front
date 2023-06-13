import { useQuery } from '@tanstack/react-query';
import { UserInfoType, authQueryKeys, authUrl, get } from 'api/admin';

export const useGetUserInfo = () => {
  const query = useQuery<UserInfoType>(authQueryKeys.getUserInfo(), () =>
    get(authUrl.userInfo())
  );

  return query;
};
