import Image from 'next/image';

import { css } from '@emotion/react';

import * as S from 'admin/components/CarouselController/style';

import type { FileInfoType } from 'api/client';

interface CarouselProps {
  currentIndex: number;
  fileInfo: FileInfoType[];
}

const GalleryCarousel: React.FC<CarouselProps> = ({
  currentIndex,
  fileInfo,
}) => (
  <S.IMGOuterWrapper
    css={css`
      width: 40.6256rem;
      height: 25rem;
    `}
  >
    <S.IMGContainer>
      <S.MoveContainer
        css={css`
          right: ${currentIndex * 40.6256}rem;
        `}
      >
        {fileInfo.map((file, i) => (
          <S.IMGWrapper
            key={file.fileName + i}
            css={css`
              width: 40.6256rem;
              height: 25rem;
              ${currentIndex === i &&
              css`
                transition: opacity 0.3s;
                z-index: 1;
                opacity: 1;
              `}
            `}
          >
            <Image unoptimized alt='content image' src={file.fileUrl} fill />
          </S.IMGWrapper>
        ))}
      </S.MoveContainer>
    </S.IMGContainer>
  </S.IMGOuterWrapper>
);

export default GalleryCarousel;
