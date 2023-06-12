import React from 'react';

import { css } from '@emotion/react';

import { Point } from 'client/components';

import * as S from './style';

interface TitleProps {
  children: React.ReactNode;
  font: {
    className?: string;
    color?: string;
  };
  point: {
    pointSize?: string;
    pointPosition?: 'top' | 'bottom';
    pointColor?: string;
  };
}

const Title: React.FC<TitleProps> = ({
  children,
  font: { className = 'title', color = '#212121' },
  point: { pointPosition = 'top', pointSize = '18px', pointColor = '#B2E449;' },
}) => (
  <S.TitleContainer>
    <h1
      css={css`
        color: ${color};
      `}
      className={className}
    >
      {children}
    </h1>
    <Point position={pointPosition} size={pointSize} color={pointColor} />
  </S.TitleContainer>
);

export default Title;
