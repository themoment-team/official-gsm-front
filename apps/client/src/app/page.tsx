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
  SEOHelmet,
} from 'client/components';
import { useGetWindowScrollHeight, useGetWindowWidth } from 'client/hooks';

const headerHeightPx = 64;

export default function Home() {
  const windowScrollHeight = useGetWindowScrollHeight();
  const windowWidth = useGetWindowWidth();

  /** 가로 : 세로 = 16 : 9 = 100 : 56.25 (56.25%) */
  const promotionVideoHeightPx = (windowWidth / 100) * 56.25;

  const videoOverlayPx = promotionVideoHeightPx - headerHeightPx;

  const isBackgroundWhite = windowScrollHeight > videoOverlayPx;

  return (
    <>
      <SEOHelmet title={'테스트입니다'} description={'테스트입니다.'} />
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
