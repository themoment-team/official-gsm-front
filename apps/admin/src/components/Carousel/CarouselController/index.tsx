import type { Dispatch, SetStateAction } from 'react';

import { css } from '@emotion/react';

import { ChevronIcon } from 'admin/assets';

import type { FileInfoType } from 'api/client';

import * as S from './style';

interface CarouselControllerProps {
  currentIndex: number;
  setCurrentIndex: Dispatch<SetStateAction<number>>;
  fileInfo: FileInfoType[];
}

const CarouselController: React.FC<CarouselControllerProps> = ({
  currentIndex,
  setCurrentIndex,
  fileInfo,
}) => {
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
  );
};

export default CarouselController;
