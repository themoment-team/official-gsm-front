import React from 'react';

import { PlusIcon, SeeMoreIcon } from 'admin/assets';

import * as S from './style';

interface PostListHeaderProps {
  category: 'gallery' | 'notice' | 'newsletter';
  seeMore: boolean;
  isAdmin: boolean;
}

const Title = {
  gallery: '👇지금 우리 학교는',
  notice: '📢 공지사항',
  newsletter: '📄 가정통신문',
};

const PostListHeader: React.FC<PostListHeaderProps> = ({
  category,
  seeMore,
  isAdmin,
}) => (
  <S.PostListHeader>
    {seeMore ? (
      <S.SeeMoreException>
        <S.CategoryTitle>{Title[category]}</S.CategoryTitle>
        <S.SeeMoreText>더보기</S.SeeMoreText>
        <SeeMoreIcon />
      </S.SeeMoreException>
    ) : (
      <S.CategoryTitle>{Title[category]}</S.CategoryTitle>
    )}
    {isAdmin && (
      <S.AddPostBTN>
        <PlusIcon />
      </S.AddPostBTN>
    )}
  </S.PostListHeader>
);

export default PostListHeader;
