import { PostCategoryType } from "client";

export const postQueryKeys = {
  getPostList: (pageNumber: number, category: PostCategoryType) => [
    "post",
    "list",
    pageNumber,
    category,
  ],
  getPostDetail: (postSeq: number) => ["post", "detail", postSeq],
};
