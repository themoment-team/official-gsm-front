import type { CategoryType } from 'types';

import CategoryLink from './CategoryLink';
import * as S from './style';

const categoryList = [
  { href: '/list/notice', category: '공지사항' },
  { href: '/list/newsletter', category: '가정통신문' },
  { href: '/list/gallery', category: '행사 갤러리' },
] as const;

interface ListPageCategoryProps {
  categoryParam: CategoryType;
}

const ListPageCategory: React.FC<ListPageCategoryProps> = ({
  categoryParam,
}) => (
  <S.ListPageCategory>
    {categoryList.map(({ href, category }) => (
      <CategoryLink
        key={category}
        href={href}
        isSelected={href === `/list/${categoryParam}`}
      >
        {category}
      </CategoryLink>
    ))}
  </S.ListPageCategory>
);

export default ListPageCategory;
