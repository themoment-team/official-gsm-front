'use client';

import styled from '@emotion/styled';

import {
  GalleryList,
  LinkToHelloGSM,
  MainPageNewsletterList,
  NoticeBanner,
} from 'client/components';

const MainpageContent = () => (
  <Content>
    <NoticeBanner />
    <MainPageNewsletterList />
    <LinkToHelloGSM />
    <GalleryList />
  </Content>
);

export default MainpageContent;

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
