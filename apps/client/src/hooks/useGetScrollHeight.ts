import type { RefObject } from 'react';
import { useEffect, useState } from 'react';

const useGetScrollHeight = (ref: RefObject<HTMLElement>) => {
  const [scrollTop, setScrollTop] = useState<number | undefined>(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollTop(ref?.current?.scrollTop);
    };

    ref?.current?.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      ref?.current?.removeEventListener('scroll', handleScroll);
    };
  }, [ref]);

  return scrollTop;
};

export default useGetScrollHeight;
