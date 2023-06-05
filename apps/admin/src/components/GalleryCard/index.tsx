import React from 'react';

import Image from 'next/image';

import type { ContentType } from 'api/client';
import { DateComponent } from 'ui';

import * as S from './style';

interface GalleryCardProps {
  post: ContentType;
}

const GalleryCard: React.FC<GalleryCardProps> = ({
  post: {
    postSeq,
    thumbnailUrl,
    postTitle,
    contentPreview,
    postWriter,
    createdAt,
  },
}) => (
  <S.CardWrapper href={`/post/${postSeq}`}>
    <S.IMGWrapper>
      <Image fill src={thumbnailUrl ?? ''} alt='ContentIMG' />
    </S.IMGWrapper>
    <S.Title>{postTitle}</S.Title>
    <S.Description>
      {contentPreview.length === 60 ? `${contentPreview}...` : contentPreview}
    </S.Description>
    <S.DetailWrapper>
      <S.Writer>{postWriter}</S.Writer>
      <S.Dot />
      <DateComponent createdAt={createdAt} />
    </S.DetailWrapper>
  </S.CardWrapper>
);

export default GalleryCard;
