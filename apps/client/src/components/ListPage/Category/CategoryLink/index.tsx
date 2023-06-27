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
}) => {
  if (isSelected)
    return <S.SelectedLink {...attributes}>{children}</S.SelectedLink>;
  else return <S.CategoryLink {...attributes}>{children}</S.CategoryLink>;
};

export default CategoryLink;
