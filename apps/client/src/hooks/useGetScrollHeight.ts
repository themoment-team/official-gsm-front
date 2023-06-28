import type { RefObject } from 'react';
import { useEffect, useState } from 'react';

const useGetScrollHeight = (ref: RefObject<HTMLElement>) => {
  const [scrollY, setScrollY] = useState<number | undefined>(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(ref?.current?.scrollTop);
    };

    ref?.current?.addEventListener('scroll', handleScroll);

    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      ref?.current?.removeEventListener('scroll', handleScroll);
    };
  }, [ref]);

  return scrollY;
};

export default useGetScrollHeight;
