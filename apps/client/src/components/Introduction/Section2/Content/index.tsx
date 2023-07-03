import type { ReactNode } from 'react';

import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { sectionHeight } from 'client/components/Introduction/Section2/sectionHeight';

interface ContentProps {
  children: ReactNode;
  index: number;
  scrollHeight: number;
}

const Content = ({ children, index, scrollHeight }: ContentProps) => {
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
      css={css`
        font-size: ${isCentered ? '3.75rem' : '2.5rem'};
        line-height: ${isCentered ? '4.475rem' : '2.9831rem'};
        opacity: ${isCentered ? '1' : '0.4'};
      `}
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
