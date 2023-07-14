'use client';

import { Header } from 'client/components';
import { useGetWindowScrollHeight, useGetWindowWidth } from 'client/hooks';

const headerHeightPx = 64;

const MainpageHeader = () => {
  const windowScrollHeight = useGetWindowScrollHeight();
  const windowWidth = useGetWindowWidth();

  const isTablet = windowWidth <= 1024;

  /** 가로 : 세로 = 16 : 9 = 100 : 56.25 (56.25%) */
  const promotionVideoHeightPx = isTablet ? 700 : (windowWidth / 100) * 56.25;

  const videoOverlayPx = promotionVideoHeightPx - headerHeightPx;

  // main과 분리
  const isAbovePromotionVideo = windowScrollHeight < videoOverlayPx;

  return <Header segment='' isAbovePromotionVideo={isAbovePromotionVideo} />;
};

export default MainpageHeader;
