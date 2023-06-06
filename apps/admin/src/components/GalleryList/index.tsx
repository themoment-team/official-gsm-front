import React from 'react';

import { GalleryCard } from 'admin/components';

import type { ContentType } from 'api/client';

import * as S from './style';

interface GalleryListProps {
  postList: ContentType[];
}

const GalleryList: React.FC<GalleryListProps> = ({ postList }) => (
  <S.CardContainer>
    {postList?.map((post) => (
      <GalleryCard key={post.postSeq} post={post} />
    ))}
  </S.CardContainer>
);

export default GalleryList;
