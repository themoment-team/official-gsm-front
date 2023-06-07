import React from 'react';

import Image from 'next/image';

import { WriterAndDate } from 'admin/components';
import type { ContentType } from 'api/client';

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
    <S.WiterAndDateWrapper>
      <WriterAndDate
        createdAt={createdAt}
        postWriter={postWriter}
        margin='1.5rem 0 0 0'
      />
    </S.WiterAndDateWrapper>
  </S.GalleryCard>
);

export default GalleryCard;
