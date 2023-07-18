'use client';

import { DownChevronsIcon, MouseIcon } from 'client/assets';

import * as S from './style';

interface ScrollProps {
  isPromotion: boolean;
}

const Scroll: React.FC<ScrollProps> = ({ isPromotion }) => (
  <S.ScrollContentsWrap isPromotion={isPromotion}>
    <S.ScrollTitle>scroll</S.ScrollTitle>
    <MouseIcon />
    <DownChevronsIcon />
  </S.ScrollContentsWrap>
);

export default Scroll;
