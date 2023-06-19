import type { Dispatch, SetStateAction } from 'react';

import { css } from '@emotion/react';

import { ChevronIcon } from 'admin/assets';

import { useGetPostDetail } from 'api/client';

import * as S from './style';
import { minutesToMs } from 'common';

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
  const { data } = useGetPostDetail(postSeq, {
    cacheTime: minutesToMs(30),
    staleTime: minutesToMs(3),
  });

  const min = 0;
  const max = (data?.fileInfo.length ?? 0) - 1;

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
      <S.CursorWrapper onClick={moveLeft}>
        <ChevronIcon turn={'left'} />
      </S.CursorWrapper>
      <S.DotWrapper>
        {data?.fileInfo.map((file, i) => (
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
  );
};

export default CarouselController;
