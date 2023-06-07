import { useState } from 'react';

import Image from 'next/image';

import { css } from '@emotion/react';

import { ChevronIcon } from 'admin/assets';

import type { FileInfoType } from 'api/client';

import * as S from './style';

interface CarouselProps {
  isGallery: boolean;
  fileInfo: FileInfoType[];
}

interface Image {
  width: number;
  height: number;
}

const Carousel: React.FC<CarouselProps> = ({ isGallery, fileInfo }) => {
  const [currentIndex, setCurrentIndexn] = useState<number>(0);
  const min = 0;
  const max = fileInfo.length - 1;

  const galleryImage: Image = {
    width: 40.6256,
    height: 25,
  };

  const postImage: Image = {
    width: 29.75,
    height: 43.0625,
  };

  const imgWidth = isGallery ? galleryImage.width : postImage.width;
  const imgHeight = isGallery ? galleryImage.height : postImage.height;

  const moveLeft = () => {
    setCurrentIndexn(currentIndex - 1);
    if (currentIndex === min) setCurrentIndexn(max);
  };

  const moveRight = () => {
    setCurrentIndexn(currentIndex + 1);
    if (currentIndex === max) setCurrentIndexn(min);
  };

  return (
    <S.CarouselWrapper
      css={css`
        margin-right: ${isGallery && 0};
      `}
    >
      <S.IMGOuterWrapper
        css={css`
          width: ${imgWidth}rem;
          height: ${imgHeight}rem;
        `}
      >
        <S.IMGContainer>
          <S.MoveContainer
            css={css`
              right: ${currentIndex * imgWidth}rem;
            `}
          >
            {fileInfo.map((file, i) => (
              <S.IMGWrapper
                key={file.fileName + i}
                css={css`
                  width: ${imgWidth}rem;
                  height: ${imgHeight}rem;
                  ${currentIndex === i &&
                  css`
                    transition: opacity 0.3s;
                    z-index: 1;
                    opacity: 1;
                  `}
                `}
              >
                <Image
                  unoptimized
                  alt='content image'
                  src={file.fileUrl}
                  fill
                />
              </S.IMGWrapper>
            ))}
          </S.MoveContainer>
        </S.IMGContainer>
      </S.IMGOuterWrapper>
      <S.CarouselBar
        css={css`
          width: ${imgWidth}rem;
        `}
      >
        <S.CursorWrapper onClick={moveLeft}>
          <ChevronIcon turn={'left'} />
        </S.CursorWrapper>
        <S.DotWrapper>
          {fileInfo.map((file, i) => (
            <S.Dot
              key={file.fileName}
              css={
                currentIndex === i &&
                css`
                  width: 1rem;
                  background: #b2e449;
                `
              }
            />
          ))}
        </S.DotWrapper>
        <S.CursorWrapper onClick={moveRight}>
          <ChevronIcon turn={'right'} />
        </S.CursorWrapper>
      </S.CarouselBar>
    </S.CarouselWrapper>
  );
};

export default Carousel;
