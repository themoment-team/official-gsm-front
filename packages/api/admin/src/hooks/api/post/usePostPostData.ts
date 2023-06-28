import { useMutation } from '@tanstack/react-query';

import { post, postQueryKeys, postUrl } from 'api/admin';

export const usePostPostData = () =>
  useMutation(postQueryKeys.postPostData(), (postData: any) =>
    post(postUrl.writePost(), postData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    })
  );
