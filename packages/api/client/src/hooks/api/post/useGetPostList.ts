import { useQuery } from "@tanstack/react-query";
import {
  PostCategoryType,
  PostListType,
  get,
  postQueryKeys,
  postUrl,
} from "client";

export const useGetPostList = (
  category: PostCategoryType,
  pageNumber: number
) => {
  const query = useQuery<PostListType>(
    postQueryKeys.getPostList(category, pageNumber),
    () => get(postUrl.postList(category, pageNumber)),
    {
      cacheTime: Infinity,
      staleTime: Infinity,
    }
  );

  return query;
};
