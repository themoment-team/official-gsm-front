'use client';

import * as S from './style';

const PromotionVideo = () => (
  <S.VidoeWrapper>
    <S.Video src='/video/promotion.webm' autoPlay loop muted />
    <S.VideoCover />
  </S.VidoeWrapper>
);

export default PromotionVideo;
