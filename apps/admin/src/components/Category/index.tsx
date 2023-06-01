import Link from 'next/link';

import * as S from './style';

interface CategoryProps {
  category?: string;
}
const test = [
  { path: '/notice', label: '공지사항' },
  { path: '/gallery', label: '행사갤러리' },
  { path: '/familyCorrespondence', label: '가정통신문' },
];

const Category: React.FC<CategoryProps> = ({ category }) => (
    <S.Category>
      <S.MenuWrap>
        {test.map((tab) => (
            <S.Menu key={tab.path}>
              <Link href={tab.path}>
                <S.LinkWrap>
                  <S.Path isActive={category === tab.path}>
                    ∙&nbsp;&nbsp;{tab.label}
                  </S.Path>
                </S.LinkWrap>
              </Link>
            </S.Menu>
          ))}
      </S.MenuWrap>
    </S.Category>
  );

export default Category;
