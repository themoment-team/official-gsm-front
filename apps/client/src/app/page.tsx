'use client';

import styled from '@emotion/styled';

import { Header, PromotionVideo, SlotMachine } from 'client/components';
import { useGetWindowScrollHeight, useGetWindowWidth } from 'client/hooks';

export default function Home() {
  const windowScrollHeight = useGetWindowScrollHeight();
  const windowWidth = useGetWindowWidth();

  const headerHeightPx = 64;
  const promotionVideoHeightPx = (windowWidth / 100) * 56.25;

  const videoOverlayPx = promotionVideoHeightPx - headerHeightPx;

  const isBackgroundWhite = windowScrollHeight > videoOverlayPx;

  return (
    <>
      <Header segment='' isBackgroundWhite={isBackgroundWhite} />
      <PromotionVideo />
      <SlotMachine />
      <Content />
    </>
  );
}

const Content = styled.div`
  height: 10000px;
  position: relative;
  background-color: white;
  z-index: 1;
  margin-top: calc(56.25vw - 4rem);
`;
