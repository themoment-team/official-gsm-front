import { css } from '@emotion/react';

import { ChevronIcon } from 'admin/assets';

import type { FileInfoType } from 'api/client';

import * as S from './style';

interface ControllerProps {
  currentIndex: number;
  moveLeft: () => void;
  moveRight: () => void;
  fileInfo: FileInfoType[];
}

const Controller: React.FC<ControllerProps> = ({
  currentIndex,
  moveLeft,
  moveRight,
  fileInfo,
}) => (
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

export default Controller;
