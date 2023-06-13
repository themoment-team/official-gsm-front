import { useMutation } from '@tanstack/react-query';

import { authQueryKeys, authUrl, patch } from 'api/admin';

export const usePatchUsername = () => {
  return useMutation(authQueryKeys.patchUserName(), (userName: string) =>
    patch(authUrl.userName(), { userName })
  );
};
