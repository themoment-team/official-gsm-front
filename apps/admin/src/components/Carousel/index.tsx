import Image from 'next/image';

import { css } from '@emotion/react';

import { CarouselIcon } from 'admin/assets';

import * as S from './style';

interface FileInfo {
  fileUrl: string;
  fileName: string;
}

interface CarouselProps {
  thumbnailUrl: string | null;
  isGallery: boolean;
  fileInfo: FileInfo[];
}

const Carousel: React.FC<CarouselProps> = ({
  thumbnailUrl,
  isGallery,
  fileInfo,
}) => (
  <S.CarouselWrapper
    css={css`
      margin-right: ${!isGallery && '1.5'}rem;
    `}
  >
    <S.IMGWrapper
      css={css`
        width: ${isGallery ? '40.6256' : '29.75rem'}rem;
        height: ${isGallery ? '25' : '43.0625'}rem;
      `}
    >
      <Image unoptimized alt='content image' src={thumbnailUrl ?? ''} fill />
    </S.IMGWrapper>
    <S.CarouselBar
      css={css`
        width: ${isGallery ? '40.625' : '29.75'}rem;
      `}
    >
      <S.CursorWrapper>
        <CarouselIcon isTurn={false} />
      </S.CursorWrapper>
      <S.DotWrapper>
        <S.Dot />
        <S.Dot />
        <S.Dot />
        <S.Dot />
      </S.DotWrapper>
      <S.CursorWrapper>
        <CarouselIcon isTurn={true} />
      </S.CursorWrapper>
    </S.CarouselBar>
  </S.CarouselWrapper>
);

export default Carousel;
