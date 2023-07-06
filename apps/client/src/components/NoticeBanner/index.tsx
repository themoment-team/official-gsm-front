import { useState, useEffect } from 'react';

import { css } from '@emotion/react';

import { useGetPostList } from 'api/client';

import Banner from './Banner';
import NoticeBannerController from './Controller';
import * as S from './style';

const PAGE_SIZE = 5;

const NoticeBanner: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const { data } = useGetPostList('NOTICE', 1, PAGE_SIZE);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setCurrentIndex((currentIndex) =>
        currentIndex === (data?.postList.length ?? 0) - 1 ? 0 : currentIndex + 1
      );
    }, 2000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [currentIndex, data?.postList?.length]);

  return (
    <S.NoticeBannerWrapper>
      <S.SlideContainer
        css={css`
          right: calc(${currentIndex * 100}vw + ${currentIndex * 77.375}rem);
        `}
      >
        {data?.postList?.map((post) => (
          <Banner key={post.postSeq} post={post} />
        ))}
      </S.SlideContainer>
      <NoticeBannerController
        postList={data?.postList ?? []}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
      />
    </S.NoticeBannerWrapper>
  );
};

export default NoticeBanner;
