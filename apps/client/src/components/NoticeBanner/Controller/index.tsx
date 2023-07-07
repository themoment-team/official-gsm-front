import type { Dispatch, SetStateAction } from 'react';

import { css, useTheme } from '@emotion/react';

import type { ContentType } from 'types';

import * as S from './style';

interface NoticeBannerControllerProps {
  postList: ContentType[];
  currentIndex: number;
  setCurrentIndex: Dispatch<SetStateAction<number>>;
}

const NoticeBannerController: React.FC<NoticeBannerControllerProps> = ({
  postList,
  currentIndex,
  setCurrentIndex,
}) => {
  const theme = useTheme();

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
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
