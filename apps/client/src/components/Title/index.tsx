import React from 'react';

import { css } from '@emotion/react';

import * as S from './style';

interface TitleProps {
  children: React.ReactNode;

  point: {
    pointSize: string;
    pointPosition: 'top' | 'bottom';
    pointColor: string;
  };
}

const Title: React.FC<TitleProps> = ({
  children,
  point: { pointPosition, pointSize, pointColor },
}) => (
  <S.TitleContainer>
    {children}
    <S.PointStyle
      css={css`
        width: ${pointSize};
        height: ${pointSize};
        background-color: ${pointColor};
        ${pointPosition === 'top' ? 'top: 0' : 'bottom: 0.625rem'}
      `}
    />
  </S.TitleContainer>
);

export default Title;
