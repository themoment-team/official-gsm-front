import { useEffect } from 'react';

export const usePreventHistoryPop = () => {
  const preventHistoryPop = () => {
    history.pushState(null, '', location.href);
  };

  useEffect(() => {
    history.pushState(null, '', location.href);
    window.addEventListener('popstate', preventHistoryPop);

    return () => window.removeEventListener('popstate', preventHistoryPop);
  }, []);
};
