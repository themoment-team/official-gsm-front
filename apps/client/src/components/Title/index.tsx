import React from 'react';

import { css } from '@emotion/react';

import { theme } from 'client/styles';
import type { PointColorType } from 'client/types/Title';

import * as S from './style';

interface TitleProps {
  children: React.ReactNode;

  point: {
    pointSize: string;
    pointPosition: 'top' | 'bottom';
    pointColor: PointColorType;
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
        background-color: ${theme.color.primary[pointColor]};
        right: ${pointPosition === 'top' ? '-1.875rem' : '-1rem'};
        ${pointPosition === 'top' ? 'top: 0' : 'bottom: 0.625rem'}
      `}
    />
  </S.TitleContainer>
);

export default Title;
