import type { CategoryType } from 'admin/types';

import * as S from './style';

interface CategoryProps {
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

const Category: React.FC<CategoryProps> = ({ category }) => (
  <S.Category>
    {categoryArray.map(({ path, label }) => (
      <S.CustomLink href={path} key={label} isActive={isActive(category, path)}>
        ∙&nbsp;&nbsp;{label}
      </S.CustomLink>
    ))}
  </S.Category>
);

export default Category;
