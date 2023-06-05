import React from 'react';

import Image from 'next/image';

import type { ContentType } from 'api/client';
import { DateComponent } from 'ui';

import * as S from './style';

interface GalleryCardProps {
  post: ContentType;
}

const GalleryCard: React.FC<GalleryCardProps> = ({
  post: { postSeq, thumbnailUrl, postTitle, postWriter, createdAt },
}) => (
  <S.CardWrapper href={`/post/${postSeq}`}>
    <S.IMGWrapper>
      <Image fill src={thumbnailUrl ?? ''} alt='ContentIMG' />
    </S.IMGWrapper>
    <S.Title>{postTitle}</S.Title>
    <S.Description>본문 요약</S.Description>
    <S.DetailWrapper>
      <S.Writer>{postWriter}</S.Writer>
      <DateComponent createdAt={createdAt} />
    </S.DetailWrapper>
  </S.CardWrapper>
);

export default GalleryCard;
