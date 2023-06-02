import React from 'react';

import Image from 'next/image';

import { DateComponent } from 'ui';

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
  post,
  fileInfo,
  description,
}) => {
  return (
    <S.CardWrapper>
      <S.IMGWrapper>
        <Image fill src={post.thumbnailUrl as string} alt="ContentIMG" />
      </S.IMGWrapper>
      <S.Title>{post.postTitle}</S.Title>
      <S.Description>{description}</S.Description>
      <S.DetailWrapper>
        <S.Writer>{post.postWriter}</S.Writer>
        <DateComponent createdAt={post.createdAt} />
      </S.DetailWrapper>
    </S.CardWrapper>
  );
};


export default GalleryCard;
