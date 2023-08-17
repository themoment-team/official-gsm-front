import Image from 'next/image';

import type { ContentType } from 'types';

import * as S from './style';

interface BannerProps {
  post: ContentType;
}

const Banner: React.FC<BannerProps> = ({
  post: { postSeq, postTitle, contentPreview },
}) => (
  <S.Banner href={`/post/${postSeq}`}>
    <S.TextBox>
      <S.Text>공지사항 📢</S.Text>
      <S.Title>{postTitle}</S.Title>
      <S.Preview>{contentPreview}</S.Preview>
    </S.TextBox>
    <S.DonutImageWrapper>
      <Image src='/images/notice/Donut.png' alt='donut' fill sizes='250px' />
    </S.DonutImageWrapper>
  </S.Banner>
);

export default Banner;
