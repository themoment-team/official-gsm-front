import { useQuery } from '@tanstack/react-query';

import { get, approveQueryKeys, approveUrl } from 'api/admin';

import type { UnapproveListType } from 'types';

export const useGetUnapproveList = () =>
  useQuery(approveQueryKeys.getUnapproveList(), () =>
    get<UnapproveListType[]>(approveUrl.unapproveList())
  );
