import type { CategoryQueryStringType } from 'types';

export const postUrl = {
  postList: (
    category: CategoryQueryStringType,
    pageNumber: number,
    pageSize: number
  ) =>
    `/post?category=${category}&pageNumber=${pageNumber}&pageSize=${pageSize}`,
  postDetail: (postSeq: number) => `/post/${postSeq}`,
} as const;
