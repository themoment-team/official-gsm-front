/** @jsxImportSource @emotion/react */

'use client';

import React from 'react';

import { css, useTheme } from '@emotion/react';
import styled from '@emotion/styled';

import type { PointColorType, PointPositionType } from 'client/types';

interface TitleProps {
  children: React.ReactNode;

  point: {
    pointSize: string;
    pointPosition: PointPositionType;
    pointColor: PointColorType;
    right: string;
  };
}

const TitleTemplate: React.FC<TitleProps> = ({
  children,
  point: { pointPosition, pointSize, pointColor, right },
}) => {
  const theme = useTheme();
  return (
    <TitleContainer>
      {children}
      <PointStyle
        css={css`
          width: ${pointSize};
          height: ${pointSize};
          background-color: ${theme.color.primary[pointColor]};
          right: ${right};
          ${pointPosition === 'top' ? 'top: -3%' : 'bottom: 15%'};
        `}
      />
    </TitleContainer>
  );
};

export default TitleTemplate;

const PointStyle = styled.div`
  border-radius: 50%;
  position: absolute;
`;

const TitleContainer = styled.div`
  position: relative;
  display: inline-block;
`;
