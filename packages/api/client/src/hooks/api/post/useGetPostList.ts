import { useQuery } from '@tanstack/react-query';

import type { PostCategoryType, PostListType } from 'api/client';
import { get, postQueryKeys, postUrl } from 'api/client';

/**
 *
 * @param category - 'NOTICE' | 'FAMILY_NEWSLETTER' | 'EVENT_GALLERY'
 * @param pageNumber - 0 부터 시작
 * @returns useQuery()
 */
export const useGetPostList = (
  category: PostCategoryType,
  pageNumber: number
) =>
  useQuery(
    postQueryKeys.getPostList(category, pageNumber),
    () => get<PostListType>(postUrl.postList(category, pageNumber)),
    {
      keepPreviousData: true,
    }
  );
