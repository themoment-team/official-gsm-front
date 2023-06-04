import { useQuery } from '@tanstack/react-query';

import type { PostDetailType} from 'api/client';
import { postUrl, get, postQueryKeys } from 'api/client';

export const useGetPostDetail = (seq: number) => {
  const query = useQuery<PostDetailType>(postQueryKeys.getPostDetail(seq), () =>
    get(postUrl.postDetail(seq))
  );

  return query;
};
