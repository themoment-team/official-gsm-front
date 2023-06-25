import { useState, useEffect } from 'react';

import { css } from '@emotion/react';

import type { ContentType } from 'api/client';

import Banner from './Banner';
import NoticeBannerController from './Controller';
import * as S from './style';

interface NoticeBannerType {
  postList: ContentType[];
}

const NoticeBanner: React.FC<NoticeBannerType> = ({ postList }) => {
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

  return (
    <S.NoiceBannerWrapper>
      <S.SlideContainer
        css={css`
          right: calc(${currentIndex * 100}vw + ${currentIndex * 77.375}rem);
        `}
      >
        {postList.map((post) => (
          <Banner key={post.postSeq} post={post} />
        ))}
      </S.SlideContainer>
      <NoticeBannerController
        postList={postList}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
        setIsRecentClick={setIsRecentClick}
      />
    </S.NoiceBannerWrapper>
  );
};

export default NoticeBanner;
