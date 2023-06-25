import Image from 'next/image';

import type { ContentType } from 'api/client';

import * as S from './style';

interface BannerProps {
  post: ContentType;
}

const Banner: React.FC<BannerProps> = ({
  post: { postTitle, contentPreview },
}) => (
  <S.Banner>
    <S.DonutImageWrapper>
      <Image src='images/notice/Donut.png' alt='donut' fill />
    </S.DonutImageWrapper>
    <S.TextBox>
      <S.Text>공지사항 📢</S.Text>
      <S.Title>{postTitle}</S.Title>
      <S.Preview>{contentPreview}</S.Preview>
    </S.TextBox>
  </S.Banner>
);

export default Banner;
