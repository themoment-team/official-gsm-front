import React from 'react';

import { css } from '@emotion/react';

import { PlusIcon, SeeMoreIcon } from 'admin/assets';

import * as S from './style';

interface PostListHeaderProps {
  category: 'gallery' | 'notice' | 'newsletter';
  seeMore?: boolean;
  isAdmin?: boolean;
  marginTop?: string;
}

const Title = {
  notice: '📢 공지사항',
  newsletter: '📄 가정통신문',
  gallery: '행사 갤러리',
};

const PostListHeader: React.FC<PostListHeaderProps> = ({
  category,
  seeMore = false,
  isAdmin = true,
  marginTop,
}) => (
  <S.PostListHeader
    css={css`
      margin-top: ${marginTop};
    `}
  >
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
