import type { Dispatch, SetStateAction } from 'react';

import { css, useTheme } from '@emotion/react';

import type { ContentType } from 'api/client';

import * as S from './style';

interface NoticeBannerControllerProps {
  postList: ContentType[];
  currentIndex: number;
  setCurrentIndex: Dispatch<SetStateAction<number>>;
  setIsRecentClick: Dispatch<SetStateAction<boolean>>;
}

const NoticeBannerController: React.FC<NoticeBannerControllerProps> = ({
  postList,
  currentIndex,
  setCurrentIndex,
  setIsRecentClick,
}) => {
  const theme = useTheme();

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
    setIsRecentClick(true);
    setTimeout(() => {
      setIsRecentClick(false);
    }, 2000);
  };

  return (
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
  );
};

export default NoticeBannerController;
