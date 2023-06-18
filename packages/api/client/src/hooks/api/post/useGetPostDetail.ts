import { useQuery } from '@tanstack/react-query';

import type { PostDetailType } from 'api/client';
import { postUrl, get, postQueryKeys } from 'api/client';

export const useGetPostDetail = (seq: number) =>
  useQuery(postQueryKeys.getPostDetail(seq), () =>
    get<PostDetailType>(postUrl.postDetail(seq))
  );
