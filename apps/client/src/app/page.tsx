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

const headerHeightPx = 64;

export default function Home() {
  const windowScrollHeight = useGetWindowScrollHeight();
  const windowWidth = useGetWindowWidth();

  const isTablet = windowWidth < 1024;

  /** 가로 : 세로 = 16 : 9 = 100 : 56.25 (56.25%) */
  const promotionVideoHeightPx = isTablet ? 700 : (windowWidth / 100) * 56.25;

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

  @media ${({ theme }) => theme.breakPoint['1024']} {
    margin-top: calc(43.75rem - 4rem);
  }
`;
