import { useState } from 'react';

import { css } from '@emotion/react';

import type { FileInfoType } from 'api/client';

import CarouselController from './CarouselController';
import GalleryCarousel from './Gallery';
import PostCarousel from './Post';
import * as S from './style';

interface CarouselProps {
  isGallery: boolean;
  fileInfo: FileInfoType[];
}

const Carousel: React.FC<CarouselProps> = ({ fileInfo, isGallery }) => {
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
      <CarouselController
        currentIndex={currentIndex}
        moveLeft={moveLeft}
        moveRight={moveRight}
        fileInfo={fileInfo}
      />
    </S.CarouselWrapper>
  );
};

export default Carousel;
