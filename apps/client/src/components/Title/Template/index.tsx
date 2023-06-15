import React from 'react';

import { css, useTheme } from '@emotion/react';

import type { PointColorType } from 'client/types/title';

import * as S from './style';

interface TitleTemplateProps {
  children: React.ReactNode;

  point: {
    pointSize: string;
    pointPosition: 'top' | 'bottom';
    pointColor: PointColorType;
  };
}

const TitleTemplate: React.FC<TitleTemplateProps> = ({
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
          right: -5%;
          ${pointPosition === 'top' ? 'top: 0' : 'bottom: 20%'};
        `}
      />
    </S.TitleContainer>
  );
};

export default TitleTemplate;
