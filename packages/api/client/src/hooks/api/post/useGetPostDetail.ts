import { useQuery } from '@tanstack/react-query';
import { minutesToMs } from 'common';

import type { PostDetailType } from 'api/client';
import { postUrl, get, postQueryKeys } from 'api/client';


export const useGetPostDetail = (seq: number) =>
  useQuery(postQueryKeys.getPostDetail(seq), () =>
    get<PostDetailType>(postUrl.postDetail(seq)),
    {
      cacheTime: minutesToMs(30),
      staleTime: minutesToMs(3),
    }
  );
