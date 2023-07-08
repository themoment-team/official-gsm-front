import { useMutation } from '@tanstack/react-query';

import { del, postQueryKeys, postUrl } from 'api/admin';

export const useDeletePost = () =>
  useMutation(postQueryKeys.deletePost(), (seq: number) =>
    del(postUrl.deletePost(seq))
  );
