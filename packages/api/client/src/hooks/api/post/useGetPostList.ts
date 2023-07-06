import { useQuery } from '@tanstack/react-query';

import { get, postQueryKeys, postUrl } from 'api/client';

import type { CategoryQueryStringType, PostListType } from 'types';

/**
 *
 * @param category - 'NOTICE' | 'FAMILY_NEWSLETTER' | 'EVENT_GALLERY'
 * @param pageNumber - 1 부터 시작
 * @param pageSize - number
 * @returns useQuery()
 */
export const useGetPostList = (
  category: CategoryQueryStringType,
  pageNumber: number,
  pageSize: number
) =>
  useQuery(
    postQueryKeys.getPostList(category, pageNumber),
    () => get<PostListType>(postUrl.postList(category, pageNumber, pageSize)),
    {
      keepPreviousData: true,
    }
  );
