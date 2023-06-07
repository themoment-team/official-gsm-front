import React from 'react';

import type { LinkProps } from 'next/link';

import { PlusIcon } from 'admin/assets';
import * as S from 'admin/components/PostButton/style';

const WriteButton: React.FC<LinkProps> = ({ ...attributes }) => (
  <S.CustomLink {...attributes}>
    <PlusIcon color='#ffffff' />
    <S.Text>글쓰기</S.Text>
  </S.CustomLink>
);

export default WriteButton;
