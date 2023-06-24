import { Donut } from 'client/assets';

import type { ContentType } from 'api/client';

import * as S from './style';

interface NoticeBannerProps {
  post: ContentType;
}

const NoticeBanner: React.FC<NoticeBannerProps> = ({
  post: { postTitle, contentPreview },
}) => (
  <S.Banner>
    <S.DonutImage src={Donut} alt='donut' />
    <S.TextBox>
      <S.Text>공지사항 📢</S.Text>
      <S.Title>{postTitle}</S.Title>
      <S.Preview>{contentPreview}</S.Preview>
    </S.TextBox>
  </S.Banner>
);

export default NoticeBanner;
