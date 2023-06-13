import { useMutation } from '@tanstack/react-query';

import { authQueryKeys, authUrl, patch } from 'api/admin';

export const usePatchUsername = () =>
  useMutation(authQueryKeys.patchUsername(), (userName: string) =>
    patch(authUrl.username(), { userName })
  );
