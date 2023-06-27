import { useMutation } from '@tanstack/react-query';

import { approveQueryKeys, approveUrl, patch } from 'api/admin';

export const usePatchApprove = () =>
  useMutation(approveQueryKeys.patchApprove(), (userSeq: string) =>
    patch(approveUrl.approve(userSeq))
  );
