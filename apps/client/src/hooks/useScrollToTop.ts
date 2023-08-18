import { useEffect } from 'react';

/**
 * window를 맨 위로 scroll합니다.
 */
export default function useScrollToTop() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
}
