import { Donut } from 'client/assets';

import type { ContentType } from 'api/client';

import * as S from './style';

interface NoticeBannerProps {
  post: ContentType;
}

const NoticeBanner: React.FC<NoticeBannerProps> = ({
  post: { postTitle, contentPreview },
}) => (
  <S.NoticeBanner>
    <S.DonutImage src={Donut} alt='donut' />
    <S.TextBox>
      <S.NoticeText>공지사항 📢</S.NoticeText>
      <S.NoticeTitle>{postTitle}</S.NoticeTitle>
      <S.NoticePreview>{contentPreview}</S.NoticePreview>
    </S.TextBox>
    <S.Dots>
      <S.Dot />
      <S.Dot />
      <S.Dot />
      <S.Dot />
      <S.Dot />
    </S.Dots>
  </S.NoticeBanner>
);

export default NoticeBanner;
