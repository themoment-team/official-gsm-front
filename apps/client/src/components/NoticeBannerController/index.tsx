import { useState } from 'react';

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

  return (
    <S.NoiceBannerWrapper>
      <S.MoveContainer
        css={css`
          right: calc(${currentIndex * 100}vw + ${currentIndex * 1240}px);
        `}
      >
        {postList.map((post) => (
          <NoticeBanner key={post.postSeq} post={post} />
        ))}
      </S.MoveContainer>
      <S.DotsContainer>
        <S.Dots>
          {postList.map((_, i) => (
            <S.Dot
              key={i}
              onClick={() => setCurrentIndex(i)}
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
