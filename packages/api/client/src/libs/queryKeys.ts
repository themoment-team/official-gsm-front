import type { PostCategoryType } from 'api/client';

export const postQueryKeys = {
  getPostList: (category: PostCategoryType, pageNumber: number) => [
    'post',
    'list',
    category,
    pageNumber,
  ],
  getPostDetail: (postSeq: number) => ['post', 'detail', postSeq],
};
