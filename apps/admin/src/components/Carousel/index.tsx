import Image from 'next/image';

import { css } from '@emotion/react';

import { CarouselIcon } from 'admin/assets';

import * as S from './style';

import { useState } from 'react';

import { FileInfoType } from 'api/client';

interface CarouselProps {
  isGallery: boolean;
  fileInfo: FileInfoType[];
}

const Carousel: React.FC<CarouselProps> = ({ isGallery, fileInfo }) => {
  const [currentIndex, setCurrentIndexn] = useState<number>(0);
  const min = 0;
  const max = fileInfo.length - 1;

  const imgWidth = isGallery ? 40.6256 : 29.75;
  const imgHeight = isGallery ? 25 : 43.0625;

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
        margin-right: ${!isGallery && '1.5'}rem;
        width: ${imgWidth}rem;
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
              <Image unoptimized alt='content image' src={file.fileUrl} fill />
            </S.IMGWrapper>
          ))}
        </S.MoveContainer>
      </S.IMGContainer>
      <S.CarouselBar
        css={css`
          width: ${isGallery ? '40.625' : '29.75'}rem;
          margin-top: ${imgHeight + 1.5625}rem;
        `}
      >
        <S.CursorWrapper onClick={moveLeft}>
          <CarouselIcon turn={'left'} />
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
          <CarouselIcon turn={'right'} />
        </S.CursorWrapper>
      </S.CarouselBar>
    </S.CarouselWrapper>
  );
};

export default Carousel;
