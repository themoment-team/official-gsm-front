import { useEffect } from 'react';

import { preventClose } from 'admin/utils';

export const usePreventClose = () =>
  useEffect(() => {
    window.addEventListener('beforeunload', preventClose);

    return () => {
      window.removeEventListener('beforeunload', preventClose);
    };
  }, []);
