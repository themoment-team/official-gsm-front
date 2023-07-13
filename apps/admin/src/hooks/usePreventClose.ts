import { useEffect } from 'react';

const preventClose = (e: BeforeUnloadEvent) => {
  e.preventDefault();
  e.returnValue = '';
};

export const usePreventClose = () =>
  useEffect(() => {
    window.addEventListener('beforeunload', preventClose);

    return () => {
      window.removeEventListener('beforeunload', preventClose);
    };
  }, []);
