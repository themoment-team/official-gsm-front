import React from 'react';

import type { LinkProps } from 'next/link';

import { WriteIcon } from 'admin/assets';
import * as S from 'admin/components/PostButton/style';

const EditButton: React.FC<LinkProps> = ({ ...attributes }) => (
  <S.CustomLink {...attributes}>
    <WriteIcon color='#ffffff' />
    <S.Text>수정하기</S.Text>
  </S.CustomLink>
);

export default EditButton;
