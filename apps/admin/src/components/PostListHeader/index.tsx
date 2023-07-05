import React from 'react';

import { css } from '@emotion/react';

import { categoryQueryString } from 'common';

import { WriteButton } from 'admin/components';

import * as S from './style';

type CategoryParamsType = 'notice' | 'newsletter' | 'gallery';

interface PostListHeaderProps {
  category: CategoryParamsType;
  marginTop?: string;
}

const Title = {
  notice: '📢 공지사항',
  newsletter: '📄 가정통신문',
  gallery: '📷 행사 갤러리',
} as const;

const writePageHref = (category: CategoryParamsType) =>
  `/post/write?category=${categoryQueryString[category]}`;

const PostListHeader: React.FC<PostListHeaderProps> = ({
  category,
  marginTop,
}) => (
  <S.PostListHeader
    css={css`
      margin-top: ${marginTop};
    `}
  >
    <S.CategoryTitle>{Title[category]}</S.CategoryTitle>
    <WriteButton href={writePageHref(category)} />
  </S.PostListHeader>
);

export default PostListHeader;
