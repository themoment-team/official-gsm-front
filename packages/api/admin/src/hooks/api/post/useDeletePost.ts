import { useMutation, useQueryClient } from '@tanstack/react-query';

import { del, postQueryKeys, postUrl } from 'api/admin';

export const useDeletePost = (seq: number) => {
  const queryClient = useQueryClient();

  return useMutation(
    postQueryKeys.deletePost(),
    () => del(postUrl.deletePost(seq)),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['post', 'list']);
      },
    }
  );
};
