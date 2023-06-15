import { useEffect } from 'react';

export const usePreventHistoryPop = () => {
  useEffect(() => {
    history.pushState(null, '', location.href);
    window.onpopstate = function () {
      history.go(1);
    };
  }, []);
};
