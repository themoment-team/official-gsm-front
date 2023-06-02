import React from 'react';

import { GalleryCard } from 'admin/components';

import * as S from './style';

interface GalleryListProps {
  postList: PostType[];
}

interface PostType {
  postSeq: number;
  postTitle: string;
  postWriter: string;
  createdAt: string;
  thumbnailUrl: string | null;
  fileIsExist: boolean;
}

const GalleryList: React.FC<GalleryListProps> = ({ postList }) => (
  <S.CardContainer>
    {postList?.map((post) => {
      const subTitle = 'postSeq => postContent 요청하기';
      const fileInfo = [
        {
          fileUrl: 'postSeq => fileInfo 요청하기',
          fileName: 'postSeq => fileInfo 요청하기',
        },
      ];
      return (
        <GalleryCard
          post={post}
          fileInfo={fileInfo}
          description={subTitle}
          key={post.postSeq}
        />
      );
    })}
  </S.CardContainer>
);

export default GalleryList;
