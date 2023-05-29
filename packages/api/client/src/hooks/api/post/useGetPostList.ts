import { useQuery } from "@tanstack/react-query";
import {
  PostCategoryType,
  PostListType,
  get,
  postQueryKeys,
  postUrl,
} from "client";

export const useGetPostList = (
  pageNumber: number,
  category: PostCategoryType
) => {
  const query = useQuery<PostListType>(
    postQueryKeys.getPostList(pageNumber, category),
    () => get(postUrl.postList(pageNumber, category)),
    {
      cacheTime: Infinity,
      staleTime: Infinity,
    }
  );

  return query;
};
