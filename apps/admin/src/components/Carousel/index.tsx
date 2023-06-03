import * as S from './style';
import Image from 'next/image';
import { css } from '@emotion/react';
import { CarouselIcon } from 'admin/assets';

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
}) => {
  return (
    <S.CarouselWrapper
      css={css`
        margin-right: ${!isGallery && '24'}px;
      `}
    >
      <S.IMGWrapper
        css={css`
          width: ${isGallery ? '650' : '476'}px;
          height: ${isGallery ? '400' : '689'}px;
        `}
      >
        <Image alt='content image' src={thumbnailUrl ?? ''} fill />
      </S.IMGWrapper>
      <S.CarouselBar
        css={css`
          width: ${isGallery ? '650' : '476'}px;
        `}
      >
        <CarouselIcon isTurn={false} />
        <S.DotWrapper>
          <S.Dot />
          <S.Dot />
          <S.Dot />
          <S.Dot />
        </S.DotWrapper>
        <CarouselIcon isTurn={true} />
      </S.CarouselBar>
    </S.CarouselWrapper>
  );
};

export default Carousel;
