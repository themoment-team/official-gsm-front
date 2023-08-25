import { useQuery } from '@tanstack/react-query';

import { get, postQueryKeys, postUrl } from 'api/client';

import type { CategoryQueryStringType, PostListType } from 'types';

import type { UseQueryOptions } from '@tanstack/react-query';

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
  pageSize: number,
  options?: UseQueryOptions<PostListType>
) =>
  useQuery<PostListType>(
    postQueryKeys.getPostList(category, pageNumber, pageSize),
    () => get(postUrl.postList(category, pageNumber, pageSize)),
    {
      keepPreviousData: true,
      ...options,
    }
  );
