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
import { useGetWindowScrollHeight, useGetWindowHeight } from 'client/hooks';

const headerHeightPx = 64;

export default function Home() {
  const windowScrollHeight = useGetWindowScrollHeight();
  const windowHeight = useGetWindowHeight();

  const videoOverlayPx = windowHeight - headerHeightPx;

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
  margin-top: calc(100vh - 4rem);
  padding: 6.25rem 0 12.5rem;
`;
