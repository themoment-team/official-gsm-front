import { useState } from 'react';

import { css } from '@emotion/react';

import { ChevronIcon } from 'admin/assets';

import type { FileInfoType } from 'api/client';

import GalleryCarousel from './GalleryCarousel';
import PostCarousel from './PostCarousel';
import * as S from './style';

interface CarouselControllerProps {
  isGallery: boolean;
  fileInfo: FileInfoType[];
}

const Carousel: React.FC<CarouselControllerProps> = ({
  fileInfo,
  isGallery,
}) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const min = 0;
  const max = fileInfo.length - 1;

  const moveLeft = () => {
    setCurrentIndex(currentIndex - 1);
    if (currentIndex === min) setCurrentIndex(max);
  };

  const moveRight = () => {
    setCurrentIndex(currentIndex + 1);
    if (currentIndex === max) setCurrentIndex(min);
  };

  return (
    <S.CarouselWrapper
      css={css`
        margin: ${isGallery && 0};
        width: ${isGallery && '40.6256rem'};
      `}
    >
      {isGallery ? (
        <GalleryCarousel fileInfo={fileInfo} currentIndex={currentIndex} />
      ) : (
        <PostCarousel fileInfo={fileInfo} currentIndex={currentIndex} />
      )}
      <S.CarouselBar>
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
