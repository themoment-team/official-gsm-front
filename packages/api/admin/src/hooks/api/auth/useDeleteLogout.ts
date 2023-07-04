import { useMutation } from '@tanstack/react-query';

import { authQueryKeys, authUrl, del } from 'api/admin';

export const useDeleteLogout = () =>
  useMutation(authQueryKeys.deleteLogout(), () => del(authUrl.logout()));
