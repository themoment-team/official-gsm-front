'use client';

import styled from '@emotion/styled';

import { Header, PromotionVideo } from 'client/components';
import { useGetWindowScrollHeight, useGetWindowWidth } from 'client/hooks';

export default function Home() {
  const windowScrollHeight = useGetWindowScrollHeight();
  const windowWidth = useGetWindowWidth();

  const promotionVideoHeight = (windowWidth / 100) * 56.25 - 64;

  const isBackgroundWhite = windowScrollHeight > promotionVideoHeight;

  return (
    <>
      <Header segment='' isBackgroundWhite={isBackgroundWhite} />
      <PromotionVideo />
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
