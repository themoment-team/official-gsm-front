/** @jsxImportSource @emotion/react */

'use client';

import Image from 'next/image';

import { css, useTheme } from '@emotion/react';

import type { BusinessCardItemType } from 'client/types';

import * as S from './style';

const BusinessCard = ({
  title,
  subTitle,
  color,
  img,
  pointPosition,
}: BusinessCardItemType) => {
  const theme = useTheme();
  return (
    <S.Business>
      <S.ImgWrapper>
        <Image src={`/images/about/section6/${img}`} alt={img} fill />
      </S.ImgWrapper>
      <S.Title
        css={css`
          color: ${theme.color.primary[color]};
          background-color: ${theme.color.primary[color]}2A;
        `}
      >
        {title}
      </S.Title>
      <S.SubTitle>{subTitle}</S.SubTitle>
      <S.MobileCircle
        css={css`
          background-color: ${theme.color.primary[color]};
          ${pointPosition === 'left' ? 'left: 0' : 'right: 0'};
        `}
      />
    </S.Business>
  );
};

export default BusinessCard;
