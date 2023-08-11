'use client';

import { Scroll } from 'client/components';

import * as S from './style';

const PromotionVideo = () => (
  <S.VideoWrapper>
    <S.Video autoPlay loop muted playsInline>
      <source src='/video/promotion.webm' type='video/webm' />
      <source src='/video/promotion.mp4' type='video/mp4' />
    </S.Video>
    <S.VideoCover>
      <Scroll isPromotion={true} />
    </S.VideoCover>
  </S.VideoWrapper>
);

export default PromotionVideo;
