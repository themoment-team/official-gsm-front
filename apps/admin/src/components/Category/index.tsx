import { CategoryType } from "admin/types";
import * as S from "./style";
import Link from "next/link";

interface CategoryProps {
  category: CategoryType;
}

const categoryArray = [
  { path: "/", label: "공지사항" },
  { path: "/newsletter", label: "가정통신문" },
  { path: "/gallery", label: "행사갤러리" },
];

const Category: React.FC<CategoryProps> = ({ category }) => {
  return (
    <S.Category>
      <S.MenuWrap>
        {categoryArray.map(({ path, label }) => (
          <S.Menu key={path}>
            <Link href={path}>
              <S.LinkWrap>
                <S.Path isActive={`/${category}` === path}>
                  ∙&nbsp;&nbsp;{label}
                </S.Path>
              </S.LinkWrap>
            </Link>
          </S.Menu>
        ))}
      </S.MenuWrap>
    </S.Category>
  );
};

export default Category;
