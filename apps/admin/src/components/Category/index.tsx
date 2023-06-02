import * as S from "./style";
import Link from "next/link";
import { css } from "@emotion/react";

interface CategoryProps {
  category?: string;
  width?: string;
}
const test = [
  { path: '/notice', label: '공지사항' },
  { path: '/gallery', label: '행사갤러리' },
  { path: '/familyCorrespondence', label: '가정통신문' },
];


const Category: React.FC<CategoryProps> = ({ category, width }) => {
  return (
    <S.Category
      css={css`
        width: ${width};
        border-radius: ${width ? "0.625rem" : "1.25rem"};
      `}
    >
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
