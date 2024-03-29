import { useMutation } from '@tanstack/react-query';

import { post, postQueryKeys, postUrl } from 'api/admin';

export const usePostWritePost = () =>
  useMutation(postQueryKeys.postWritePost(), (postData: FormData) =>
    post(postUrl.writePost(), postData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    })
  );
