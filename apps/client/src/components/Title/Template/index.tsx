import React from 'react';

import { css, useTheme } from '@emotion/react';

import type { PointColorType } from 'client/types/title';

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
}) => {
  const theme = useTheme();
  return (
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
};

export default Title;
