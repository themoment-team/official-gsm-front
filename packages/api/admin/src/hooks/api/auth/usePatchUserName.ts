import { useMutation } from '@tanstack/react-query';

import { authQueryKeys, authUrl, patch } from 'api/admin';

export const usePatchUserName = () =>
  useMutation(authQueryKeys.patchUserName(), (userName: string) =>
    patch(authUrl.userName(), { userName })
  );
