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
  <S.GalleryCard href={`/post/${postSeq}`}>
    <S.IMGWrapper>
      <Image fill src={thumbnailUrl ?? ''} alt='ContentIMG' />
    </S.IMGWrapper>
    <S.Title>{postTitle}</S.Title>
    <S.ContentPreview>{contentPreview}</S.ContentPreview>
    <S.DetailWrapper>
      <S.Writer>{postWriter}</S.Writer>
      <S.Dot />
      <DateComponent createdAt={createdAt} />
    </S.DetailWrapper>
  </S.GalleryCard>
);

export default GalleryCard;
