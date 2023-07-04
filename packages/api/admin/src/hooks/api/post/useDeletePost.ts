import { useMutation } from '@tanstack/react-query';

import { del, postQueryKeys, postUrl } from 'api/admin';

export const useDeletePost = (seq: number) =>
  useMutation(postQueryKeys.deletePost(), () => del(postUrl.deletePost(seq)));
