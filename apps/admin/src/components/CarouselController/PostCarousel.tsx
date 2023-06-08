import Image from 'next/image';

import { css } from '@emotion/react';

import type { FileInfoType } from 'api/client';

import * as S from './style';

interface CarouselProps {
  currentIndex: number;
  fileInfo: FileInfoType[];
}

const PostCarousel: React.FC<CarouselProps> = ({ currentIndex, fileInfo }) => (
  <S.IMGOuterWrapper
    css={css`
      width: 29.75rem;
      height: 43.0625;
      margin-right: 1.5rem;
    `}
  >
    <S.IMGContainer>
      <S.MoveContainer
        css={css`
          right: ${currentIndex * 29.75}rem;
        `}
      >
        {fileInfo.map((file, i) => (
          <S.IMGWrapper
            key={file.fileName + i}
            css={css`
              width: 29.75rem;
              height: 43.0625rem;
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

export default PostCarousel;
