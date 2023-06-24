import { useState, useEffect } from 'react';

import { css } from '@emotion/react';
import { useTheme } from '@emotion/react';

import { NoticeBanner } from 'client/components';

import type { ContentType } from 'api/client';

import * as S from './style';

interface NoticeBannerControllerType {
  postList: ContentType[];
}

const NoticeBannerController: React.FC<NoticeBannerControllerType> = ({
  postList,
}) => {
  const theme = useTheme();
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isRecentClick, setIsRecentClick] = useState<boolean>(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (!isRecentClick) {
        setCurrentIndex(
          currentIndex === postList.length - 1 ? 0 : currentIndex + 1
        );
      }
    }, 2000);

    return () => {
      clearInterval(intervalId);
    };
  }, [currentIndex, isRecentClick, postList.length]);

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
    setIsRecentClick(true);
    setTimeout(() => {
      setIsRecentClick(false);
    }, 2000);
  };

  return (
    <S.NoiceBannerWrapper>
      <S.SlideContainer
        css={css`
          right: calc(${currentIndex * 100}vw + ${currentIndex * 77.375}rem);
        `}
      >
        {postList.map((post) => (
          <NoticeBanner key={post.postSeq} post={post} />
        ))}
      </S.SlideContainer>
      <S.DotsContainer>
        <S.Dots>
          {postList.map((_, i) => (
            <S.Dot
              key={i}
              onClick={() => handleDotClick(i)}
              css={
                currentIndex === i &&
                css`
                  background: ${theme.color.white};
                `
              }
            />
          ))}
        </S.Dots>
      </S.DotsContainer>
    </S.NoiceBannerWrapper>
  );
};

export default NoticeBannerController;
