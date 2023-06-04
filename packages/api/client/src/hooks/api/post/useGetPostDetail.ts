import { useQuery } from '@tanstack/react-query';
import { postUrl, get, PostDetailType, postQueryKeys } from 'api/client';

export const useGetPostDetail = (seq: number) => {
  const query = useQuery<PostDetailType>(postQueryKeys.getPostDetail(seq), () =>
    get(postUrl.postDetail(seq))
  );

  return query;
};
