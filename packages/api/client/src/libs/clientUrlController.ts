import type { CategoryQueryStringType } from 'types';

export const postUrl = {
  postList: (category: CategoryQueryStringType, pageNumber: number) =>
    `/post?category=${category}&pageNumber=${pageNumber}`,
  postDetail: (postSeq: number) => `/post/${postSeq}`,
} as const;
