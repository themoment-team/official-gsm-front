import { useMutation } from '@tanstack/react-query';

import { del, postQueryKeys, postUrl } from 'api/admin';

export const usePatchPost = (seq: number) =>
  useMutation(postQueryKeys.delPost(), () => del(postUrl.delPost(seq)));
