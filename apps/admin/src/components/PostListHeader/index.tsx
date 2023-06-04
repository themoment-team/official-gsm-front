import React from 'react';

import { css } from '@emotion/react';

import { PlusIcon, SeeMoreIcon } from 'admin/assets';

import * as S from './style';

interface PostListHeaderProps {
  category: 'gallery' | 'notice' | 'newsletter';
  isAdmin?: boolean;
  marginTop?: string;
}

const Title = {
  gallery: '행사 갤러리',
  notice: '📢 공지사항',
  newsletter: '📄 가정통신문',
};

const PostListHeader: React.FC<PostListHeaderProps> = ({
  category,
  isAdmin = true,
  marginTop,
}) => (
  <S.PostListHeader
    css={css`
      margin-top: ${marginTop};
    `}
  >
    <S.CategoryTitle>{Title[category]}</S.CategoryTitle>
    {isAdmin && (
      <S.AddPostBTN>
        <PlusIcon color='#FCFCFC' />
        <S.AddPostText>글쓰기</S.AddPostText>
      </S.AddPostBTN>
    )}
  </S.PostListHeader>
);

export default PostListHeader;
