import { useMutation } from '@tanstack/react-query';

import { del, postQueryKeys, postUrl } from 'api/admin';

export const DeletePost = (seq: number) =>
  useMutation(postQueryKeys.deletePost(), () => del(postUrl.deletePost(seq)));
