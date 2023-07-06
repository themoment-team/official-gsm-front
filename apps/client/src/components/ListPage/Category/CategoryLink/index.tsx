import React from 'react';

import type { LinkProps } from 'next/link';

import * as S from './style';

interface CategoryLinkProps extends LinkProps {
  isSelected: boolean;
  children: React.ReactNode;
}

const CategoryLink: React.FC<CategoryLinkProps> = ({
  isSelected,
  children,
  ...attributes
}) =>
  isSelected ? (
    <S.SelectedLink {...attributes}>{children}</S.SelectedLink>
  ) : (
    <S.CategoryLink {...attributes}>{children}</S.CategoryLink>
  );

export default CategoryLink;
