import React from 'react';

import Image from 'next/image';

import { WriterAndDate } from 'admin/components';

import * as S from './style';

interface FileInfo {
  fileUrl: string;
  fileName: string;
}

interface PostType {
  postSeq: number;
  postTitle: string;
  postWriter: string;
  createdAt: string;
  thumbnailUrl: string | null;
  fileIsExist: boolean;
}

interface GalleryCardProps {
  fileInfo: FileInfo[];
  description: string;
  post: PostType;
}

const GalleryCard: React.FC<GalleryCardProps> = ({
  post: { thumbnailUrl, postWriter, postTitle, createdAt },
  fileInfo,
  description,
}) => (
  <S.CardWrapper>
    <S.IMGWrapper>
      <Image fill src={thumbnailUrl ?? ''} alt='ContentIMG' />
    </S.IMGWrapper>
    <S.Title>{postTitle}</S.Title>
    <S.Description>{description}</S.Description>
    <WriterAndDate createdAt={createdAt} postWriter={postWriter} />
  </S.CardWrapper>
);

export default GalleryCard;
