
import { css } from '@emotion/react';

import type { CategoryType } from 'admin/types';

import * as S from './style';

interface CategoryProps {
  width?: string;
  category: CategoryType;
}

const categoryArray = [
  { path: '/', label: '공지사항' },
  { path: '/newsletter', label: '가정통신문' },
  { path: '/gallery', label: '행사 갤러리' },
];

const isActive = (category: CategoryType, path: string) => {
  if (category === 'notice' && path === '/') return true;
  return `/${category}` === path;
};

const Category: React.FC<CategoryProps> = ({ category, width }) => (
    <S.Category
      css={css`
        width: ${width};
        border-radius: ${width ? '0.625rem' : '1.25rem'};
      `}
    >
      {categoryArray.map(({ path, label }) => (
        <S.CustomLink
          href={path}
          key={label}
          css={css`
            color: ${isActive(category, path) ? '#FFFFFF' : '#a4a4a4'};
          `}
        >
          ∙&nbsp;&nbsp;{label}
        </S.CustomLink>
      ))}
    </S.Category>
  );

export default Category;
