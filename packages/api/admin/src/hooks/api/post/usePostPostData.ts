import { useMutation } from '@tanstack/react-query';

import { post, postQueryKeys, postBoardUrl } from 'api/admin';
import type { PostDataType } from 'api/admin/src/types/post';

export const usePostPostData = () =>
  useMutation(postQueryKeys.postPostData(), (postData: PostDataType) =>
    post(postBoardUrl.BoardInfo(), postData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    })
  );
