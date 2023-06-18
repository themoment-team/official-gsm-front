import React from 'react';

import { css } from '@emotion/react';

import { WriteButton } from 'admin/components';

import * as S from './style';

interface PostListHeaderProps {
  category: 'gallery' | 'notice' | 'newsletter';
  isAdmin?: boolean;
  marginTop?: string;
}

const Title = {
  notice: '📢 공지사항',
  newsletter: '📄 가정통신문',
  gallery: '행사 갤러리',
} as const;

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
    {isAdmin && <WriteButton href='/post/write' />}
  </S.PostListHeader>
);

export default PostListHeader;
