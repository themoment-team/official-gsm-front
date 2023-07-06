import styled from '@emotion/styled';

import { pxToRem } from 'common';

import { sectionHeight } from './sectionHeight';

export const Layout = styled.div`
  position: relative;
  width: 100vw;
  height: 53.5rem;
  background: ${({ theme }) => theme.color.sub.navy};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ScrollSection = styled.div`
  height: ${pxToRem(sectionHeight.scrollSectionHeightPx)}rem;
  overflow-y: scroll;
  scrollbar-width: none;

  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const ContentSection = styled.div`
  height: ${pxToRem(sectionHeight.contentSectionHeightPx)}rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 7.5rem;
  text-align: center;
`;

export const Point = styled.span`
  color: ${({ theme }) => theme.color.primary.lime};
`;
