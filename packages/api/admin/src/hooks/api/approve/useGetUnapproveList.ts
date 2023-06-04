import { useQuery } from '@tanstack/react-query';

import { get, approveQueryKeys, approveUrl } from 'api/admin';
import type { UnapproveListType } from 'api/admin/src/types/approve';

export const useGetUnapproveList = () => {
  const query = useQuery<UnapproveListType[]>(
    approveQueryKeys.getUnapproveList(),
    () => get(approveUrl.unapproveList())
  );

  return query;
};
