import type { PostCategoryType } from 'api/client';

export const postUrl = {
  postList: (category: PostCategoryType, pageNumber: number) =>
    `/post?category=${category}&pageNumber=${pageNumber}`,
  postDetail: (postSeq: number) => `/post/${postSeq}`,
} as const;
