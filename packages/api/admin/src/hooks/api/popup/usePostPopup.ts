import { useMutation } from '@tanstack/react-query';

import { post, popupQueryKeys, popupUrl } from 'api/admin';

export const usePostPopup = () =>
  useMutation(popupQueryKeys.postPopup(), (postData: FormData) =>
    post(popupUrl.popup(), postData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    })
  );
