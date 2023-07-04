import Image from 'next/image';

import { css, useTheme } from '@emotion/react';

import type { BusinessCardItemType } from 'client/types';

import * as S from './style';

const BusinessCard = ({
  title,
  subTitle,
  color,
  img,
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
    </S.Business>
  );
};

export default BusinessCard;
