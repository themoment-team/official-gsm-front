/** @jsxImportSource @emotion/react */

import type { ReactNode } from 'react';

import { css, useTheme } from '@emotion/react';
import styled from '@emotion/styled';

import { sectionHeight } from 'client/components/About/Section2/sectionHeight';

interface ContentProps {
  children: ReactNode;
  index: number;
  scrollHeight: number;
}

const Content = ({ children, index, scrollHeight }: ContentProps) => {
  const theme = useTheme();

  const scrollSetting = {
    scrollMax:
      sectionHeight.contentSectionHeightPx -
      sectionHeight.scrollSectionHeightPx,
    scrollItem: 4,
  };

  const centerAverage = scrollSetting.scrollMax / scrollSetting.scrollItem;
  const isCentered =
    scrollHeight >= index * centerAverage &&
    scrollHeight <= (index + 1) * centerAverage;

  return (
    <ContentStyle
      css={
        isCentered
          ? css`
              font-size: 3.75rem;
              line-height: 4.475rem;
              opacity: 1;

              @media ${theme.breakPoint['1024']} {
                font-size: 2.5rem;
                line-height: 3rem;
              }
            `
          : css`
              font-size: 2.5rem;
              line-height: 2.9831rem;
              opacity: 0.4;

              @media ${theme.breakPoint['1024']} {
                font-size: 2.125rem;
                line-height: 2.5625rem;
              }
            `
      }
    >
      {children}
    </ContentStyle>
  );
};

export default Content;

const ContentStyle = styled.h3`
  color: ${({ theme }) => theme.color.white};
  font-weight: 700;
  transition: all 0.5s;
`;
