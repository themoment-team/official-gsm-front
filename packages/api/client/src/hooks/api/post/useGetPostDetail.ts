import { useQuery } from '@tanstack/react-query';

import { postUrl, get, postQueryKeys } from 'api/client';

import type { PostDetailType } from 'types';

import type { UseQueryOptions } from '@tanstack/react-query';

export const useGetPostDetail = (
  seq: number,
  options?: UseQueryOptions<PostDetailType>
) =>
  useQuery<PostDetailType>(
    postQueryKeys.getPostDetail(seq),
    () => get(postUrl.postDetail(seq)),
    options
  );
