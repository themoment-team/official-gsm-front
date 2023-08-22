import type { CategoryQueryStringType } from 'types';

export const postQueryKeys = {
  getPostList: (
    category: CategoryQueryStringType,
    pageNumber: number,
    pageSize: number
  ) => ['post', 'list', category, pageNumber, pageSize],
  getPostDetail: (postSeq: number) => ['post', 'detail', postSeq],
} as const;
