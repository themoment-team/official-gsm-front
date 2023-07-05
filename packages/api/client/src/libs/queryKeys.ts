import type { CategoryQueryStringType } from 'types';

export const postQueryKeys = {
  getPostList: (category: CategoryQueryStringType, pageNumber: number) => [
    'post',
    'list',
    category,
    pageNumber,
  ],
  getPostDetail: (postSeq: number) => ['post', 'detail', postSeq],
} as const;
