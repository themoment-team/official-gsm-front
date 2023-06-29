'use client';

import styled from '@emotion/styled';

import {
  Header,
  PromotionVideo,
  Footer,
  SlotMachine,
  LinkToHelloGSM,
  MainPageNewsletterList,
  NoticeBanner,
  GalleryList,
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
        <NoticeBanner />
        <MainPageNewsletterList />
        <LinkToHelloGSM />
        <GalleryList />
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
  padding: 6.25rem 0 12.5rem;
`;
