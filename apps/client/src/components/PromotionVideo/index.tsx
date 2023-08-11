'use client';

import dynamic from 'next/dynamic';

import { Scroll } from 'client/components';

import * as S from './style';

const Video = dynamic(() => import('./Video'), {
  ssr: false,
});

const PromotionVideo = () => (
  <S.VideoWrapper>
    <Video />
    <S.VideoCover>
      <Scroll isPromotion={true} />
    </S.VideoCover>
  </S.VideoWrapper>
);

export default PromotionVideo;
