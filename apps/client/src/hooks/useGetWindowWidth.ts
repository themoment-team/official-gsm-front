import { useEffect, useState } from 'react';

/**
 * viewport의 width 값을 가져옵니다.
 * @returns windowWidth: number(단위 px)
 */
export default function useGetWindowWidth() {
  const [windowWidth, setWindowWidth] = useState<number>(1280);

  let throttling = false;

  function onResize() {
    if (throttling) return;

    throttling = true;

    setTimeout(() => {
      setWindowWidth(window.innerWidth);
      throttling = false;
    }, 200);
  }

  useEffect(() => {
    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return windowWidth;
}
