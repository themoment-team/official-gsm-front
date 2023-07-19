'use client';

import { Header } from 'client/components';
import { useGetWindowHeight, useGetWindowScrollHeight } from 'client/hooks';

const headerHeightPx = 64;

const MainpageHeader = () => {
  const windowScrollHeight = useGetWindowScrollHeight();
  const windowHeight = useGetWindowHeight();

  const videoOverlayPx = windowHeight - headerHeightPx;

  const isAbovePromotionVideo = windowScrollHeight < videoOverlayPx;

  return <Header segment='' isAbovePromotionVideo={isAbovePromotionVideo} />;
};

export default MainpageHeader;
