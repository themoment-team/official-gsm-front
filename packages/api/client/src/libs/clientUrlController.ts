import { PostCategoryType } from "../types";

export const postUrl = {
  postList: (pageNumber: number, category: PostCategoryType) =>
    `/post?pageNumber=${pageNumber}&category=${category}`,
  postDetail: (postSeq: number) => `/post/${postSeq}`,
} as const;
