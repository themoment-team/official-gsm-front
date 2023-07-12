import { HomeScrollDownIcon } from 'client/assets';

import * as S from './style';

const PromotionVideo = () => (
  <S.VidoeWrapper>
    <S.Video src='/video/promotion.mp4' autoPlay loop muted playsInline />
    <S.VideoCover>
      <HomeScrollDownIcon />
    </S.VideoCover>
  </S.VidoeWrapper>
);

export default PromotionVideo;
