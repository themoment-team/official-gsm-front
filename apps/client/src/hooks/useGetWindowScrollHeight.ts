import { useEffect, useState } from 'react';

/**
 * 세로 스크롤 된 값을 가져옵니다.
 * @returns windowScrollHeight: number(단위 px)
 */
export default function useGetWindowScrollHeight() {
  const [windowScrollHeight, setWindowScrollHeight] = useState<number>(
    window.scrollY
  );

  let throttling = false;

  function onScroll() {
    if (throttling) return;

    throttling = true;

    setTimeout(() => {
      setWindowScrollHeight(window.scrollY);
      throttling = false;
    }, 200);
  }

  useEffect(() => {
    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return windowScrollHeight;
}
