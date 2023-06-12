import React from 'react';

import { css } from '@emotion/react';

import * as S from './style';

interface TitleProps {
  children: React.ReactNode;
  font: {
    className: string;
  };
  point: {
    pointSize: string;
    pointPosition: 'top' | 'bottom';
    pointColor: string;
  };
}

const Title: React.FC<TitleProps> = ({
  children,
  font: { className },
  point: { pointPosition, pointSize, pointColor },
}) => (
  <S.TitleContainer>
    <h1 className={className}>{children}</h1>
    <S.Point
      className={pointColor}
      css={css`
        width: ${pointSize};
        height: ${pointSize};
        ${pointPosition === 'top' ? 'top : 0' : 'bottom : 0'}
      `}
    />
  </S.TitleContainer>
);

export default Title;
