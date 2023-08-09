'use client';

import { Scroll } from 'client/components';

import * as S from './style';

const PromotionVideo = () => (
  <S.VideoWrapper>
    <S.Video src='/video/promotion.mp4' autoPlay loop muted playsInline />
    <S.VideoCover>
      <Scroll isPromotion={true} />
    </S.VideoCover>
  </S.VideoWrapper>
);

export default PromotionVideo;
