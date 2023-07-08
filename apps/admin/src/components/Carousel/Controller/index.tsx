import type { Dispatch, SetStateAction } from 'react';

import { css } from '@emotion/react';


import { ChevronIcon } from 'admin/assets';

import { useGetPostDetail } from 'api/client';

import { filterImages } from 'common';

import * as S from './style';

interface CarouselControllerProps {
  currentIndex: number;
  setCurrentIndex: Dispatch<SetStateAction<number>>;
  postSeq: number;
}

const CarouselController: React.FC<CarouselControllerProps> = ({
  currentIndex,
  setCurrentIndex,
  postSeq,
}) => {
  const { data } = useGetPostDetail(postSeq);

  const imageFiles = filterImages(data?.fileInfo);

  const min = 0;
  const max = (imageFiles?.length ?? 0) - 1;

  const moveLeft = () => {
    setCurrentIndex(currentIndex - 1);
    if (currentIndex === min) setCurrentIndex(max);
  };

  const moveRight = () => {
    setCurrentIndex(currentIndex + 1);
    if (currentIndex === max) setCurrentIndex(min);
  };

  return (
    <S.CarouselBar>
      <S.MoveButton onClick={moveLeft}>
        <ChevronIcon turn={'left'} />
      </S.MoveButton>
      <S.DotWrapper>
        {imageFiles?.map((file, i) => (
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
      <S.MoveButton onClick={moveRight}>
        <ChevronIcon turn={'right'} />
      </S.MoveButton>
    </S.CarouselBar>
  );
};

export default CarouselController;
