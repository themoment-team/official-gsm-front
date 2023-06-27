import { useMutation } from '@tanstack/react-query';

import { post, postQueryKeys, postBoardUrl } from 'api/admin';

export const usePostPostData = () =>
  useMutation(postQueryKeys.postPostData(), (postData: any) =>
    post(postBoardUrl.BoardInfo(), postData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    })
  );
