'use client';

import styled from '@emotion/styled';

import {
  GalleryList,
  LinkToHelloGSM,
  MainPageNewsletterList,
  NoticeBanner,
} from 'client/components';

const MainPageContent = () => (
  <Content>
    <NoticeBanner />
    <MainPageNewsletterList />
    <LinkToHelloGSM />
    <GalleryList />
  </Content>
);

export default MainPageContent;

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
