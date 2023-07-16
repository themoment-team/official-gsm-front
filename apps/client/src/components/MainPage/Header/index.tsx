'use client';

import { Header } from 'client/components';
import {
  useGetWindowHeight,
  useGetWindowScrollHeight,
  useGetWindowWidth,
} from 'client/hooks';

const MainpageHeader = () => {
  const windowWidth = useGetWindowWidth();
  const headerHeightPx = windowWidth <= 600 ? 48 : 64;
  const windowScrollHeight = useGetWindowScrollHeight();
  const windowHeight = useGetWindowHeight();

  // 100vh - header height
  const videoOverlayPx = windowHeight - headerHeightPx;

  const isAbovePromotionVideo = windowScrollHeight < videoOverlayPx;

  return <Header segment='' isAbovePromotionVideo={isAbovePromotionVideo} />;
};

export default MainpageHeader;
