'use client';

import { Scroll } from 'client/components';

import Video from './Video';
import * as S from './style';

const PromotionVideo = () => (
  <S.VideoWrapper>
    <Video />
    <S.VideoCover>
      <Scroll isPromotion={true} />
    </S.VideoCover>
  </S.VideoWrapper>
);

export default PromotionVideo;
