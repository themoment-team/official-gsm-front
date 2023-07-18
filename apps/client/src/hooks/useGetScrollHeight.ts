'use client';

import type { RefObject } from 'react';
import { useEffect, useState } from 'react';

const useGetScrollHeight = (ref: RefObject<HTMLElement>) => {
  const [scrollTop, setScrollTop] = useState<number | undefined>(0);
  let throttling = false;

  const handleScroll = () => {
    if (throttling) return;

    throttling = true;

    setTimeout(() => {
      setScrollTop(ref?.current?.scrollTop);
      throttling = false;
    }, 300);
  };

  useEffect(() => {
    ref?.current?.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      ref?.current?.removeEventListener('scroll', handleScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref]);

  return scrollTop;
};

export default useGetScrollHeight;
