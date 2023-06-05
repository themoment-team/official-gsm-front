import Image from 'next/image';

import { css } from '@emotion/react';

import { CarouselIcon } from 'admin/assets';

import * as S from './style';

import { useState } from 'react';

interface FileInfo {
  fileUrl: string;
  fileName: string;
}

interface CarouselProps {
  isGallery: boolean;
  fileInfo: FileInfo[];
}

const Carousel: React.FC<CarouselProps> = ({ isGallery, fileInfo }) => {
  const [current, setCurrent] = useState<boolean[]>([true]);
  const [move, setMove] = useState<number>(0);

  const imageUrls: string[] = [];
  const dots: number[] = [];
  
  const imgWidth = isGallery ? 40.6256 : 29.75;
  const imgHeight = isGallery ? 25 : 43.0625;

  let newCurrnet: boolean[] = [true];
  fileInfo.forEach((file, i) => {
    imageUrls.push(file.fileUrl);
    newCurrnet.push(false);
    dots.push(i);
  });
  () => setCurrent(newCurrnet);

  const moveCurrent = (moveRight: boolean) => {
    let newCurrent = current;
    const index = newCurrent.indexOf(true);
    newCurrent[index % imageUrls.length] = false;
    if (!moveRight && index === 0) {
      newCurrent[imageUrls.length] = true;
      setMove(imageUrls.length * imgWidth);
      moveCurrent(false);
    } else {
      newCurrent[(index + (moveRight ? 1 : -1)) % imageUrls.length] = true;
      setMove(((index + (moveRight ? 1 : -1)) % imageUrls.length) * imgWidth);
    }
    setCurrent(newCurrent);
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
            right: ${move}rem;
          `}
        >
          {imageUrls.map((img, i) => (
            <S.IMGWrapper
              key={i}
              isCurrent={current[i]}
              css={css`
                width: ${imgWidth}rem;
                height: ${imgHeight}rem;
              `}
            >
              <Image unoptimized alt='content image' src={img ?? ''} fill />
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
        <S.CursorWrapper onClick={() => moveCurrent(false)}>
          <CarouselIcon turn={'left'} />
        </S.CursorWrapper>
        <S.DotWrapper>
          {dots.map((item) => (
            <S.Dot key={item} isCurrent={current[item]} />
          ))}
        </S.DotWrapper>
        <S.CursorWrapper onClick={() => moveCurrent(true)}>
          <CarouselIcon turn={'right'} />
        </S.CursorWrapper>
      </S.CarouselBar>
    </S.CarouselWrapper>
  );
};

export default Carousel;
