import { Scroll } from 'client/components';

import * as S from './style';

const PromotionVideo = () => (
  <S.VidoeWrapper>
    <S.Video src='/video/promotion.mp4' autoPlay loop muted playsInline />
    <S.VideoCover>
      <Scroll isWhite={true} />
    </S.VideoCover>
  </S.VidoeWrapper>
);

export default PromotionVideo;
