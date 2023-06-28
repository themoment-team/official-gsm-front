import type { ReactNode } from 'react';

import { css } from '@emotion/react';
import styled from '@emotion/styled';

interface ContentProps {
  children: ReactNode;
  index: number;
  scrollHeight: number;
}

const Content = ({ children, index, scrollHeight }: ContentProps) => {
  const isCentered =
    scrollHeight >= index * 200 && scrollHeight <= (index + 1) * 200;

  return (
    <ContentStyle
      css={css`
        font-size: ${isCentered ? '3.75rem' : '2.5rem'};
        opacity: ${isCentered ? '1' : '0.4'};
        line-height: ${isCentered ? '4.475rem' : '2.9831rem'};
      `}
    >
      {children}
    </ContentStyle>
  );
};

export default Content;

const ContentStyle = styled.h3`
  font-weight: 700;
  font-size: 2.5rem;
  transition: all 0.7s;
  color: ${({ theme }) => theme.color.white};
`;
