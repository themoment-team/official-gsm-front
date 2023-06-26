'use client';

import styled from '@emotion/styled';

import {
  Header,
  PromotionVideo,
  Footer,
  SlotMachine,
  LinkToHelloGSM,
  MainPageNewsletter,
} from 'client/components';
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
      <Content>
        <MainPageNewsletter />
        <LinkToHelloGSM />
      </Content>
      <Footer />
    </>
  );
}

const Content = styled.div`
  position: relative;
  background-color: ${({ theme }) => theme.color.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1;
  margin-top: calc(56.25vw - 4rem);
`;
