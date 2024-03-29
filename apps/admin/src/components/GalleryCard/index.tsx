import React from 'react';

import Image from 'next/image';

import { WriterAndDate } from 'ui';

import type { ContentType } from 'types';

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
    <S.Title className='text'>{postTitle}</S.Title>
    <S.ContentPreview className='text'>{contentPreview}</S.ContentPreview>
    <S.WiterAndDateWrapper>
      <WriterAndDate
        workspace='admin'
        createdAt={createdAt}
        postWriter={postWriter}
        margin='1.5rem 0 0 0'
      />
    </S.WiterAndDateWrapper>
  </S.GalleryCard>
);

export default GalleryCard;
