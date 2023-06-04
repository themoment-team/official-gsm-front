import { useQuery } from '@tanstack/react-query';

import type {
  PostCategoryType,
  PostListType} from 'api/client';
import {
  get,
  postQueryKeys,
  postUrl,
} from 'api/client';

export const useGetPostList = (
  category: PostCategoryType,
  pageNumber: number
) => {
  const query = useQuery<PostListType>(
    postQueryKeys.getPostList(category, pageNumber),
    () => get(postUrl.postList(category, pageNumber)),
    {
      cacheTime: Infinity,
      staleTime: Infinity,
    }
  );

  return query;
};
