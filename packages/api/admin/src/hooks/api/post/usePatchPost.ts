import { useMutation } from '@tanstack/react-query';

import { patch, postQueryKeys, postUrl } from 'api/admin';

export const usePatchPost = (seq: number) =>
  useMutation(postQueryKeys.patchWritePost(), (postData: FormData) =>
    patch(postUrl.patchPost(seq), postData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    })
  );
