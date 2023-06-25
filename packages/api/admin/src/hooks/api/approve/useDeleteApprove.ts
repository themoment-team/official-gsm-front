import { useMutation } from '@tanstack/react-query';

import { approveQueryKeys, approveUrl, del } from 'api/admin';

export const useDeleteApprove = () =>
  useMutation(approveQueryKeys.deleteApprove(), (userSeq: string) =>
    del(approveUrl.approve(userSeq))
  );
