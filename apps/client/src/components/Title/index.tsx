import React from 'react';

import { Point } from 'client/components';

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
    <Point position={pointPosition} size={pointSize} color={pointColor} />
  </S.TitleContainer>
);

export default Title;
