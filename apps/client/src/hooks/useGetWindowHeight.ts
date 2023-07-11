import { useEffect, useState } from 'react';

/**
 * viewport의 height 값을 가져옵니다.
 * @returns windowHeight: number(단위 px)
 */
export default function useGetWindowHeight() {
  const [windowHeight, setWindowHeight] = useState<number>(1080);

  let throttling = false;

  function onResize() {
    if (throttling) return;

    throttling = true;

    setTimeout(() => {
      setWindowHeight(window.innerHeight);
      throttling = false;
    }, 200);
  }

  useEffect(() => {
    setWindowHeight(window.innerHeight);

    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return windowHeight;
}
