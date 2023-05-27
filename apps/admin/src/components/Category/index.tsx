import * as S from "./style";
import { css } from "@emotion/react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const test = [
  { path: "/notice", label: "공지사항" },
  { path: "/gallery", label: "행사갤러리" },
  { path: "/familyCorrespondence", label: "가정통신문" },
];

interface CategoryProps {
  pathname?: string | string[];
}

const Category: React.FC<CategoryProps> = ({ pathname }) => {
  const currentPath = usePathname();
  const path = pathname;
  return (
    <S.Category>
      <S.MenuWrap>
        {test.map((tab) => {
          return (
            <S.Menu key={tab.path}>
              <Link href={tab.path}>
                <div
                  css={css`
                    display: flex;
                    align-items: center;
                    justify-content: space-evenly;
                    width: 85px;
                  `}
                >
                  <S.Path isActive={currentPath === tab.path}>
                    ∙&nbsp;&nbsp;{tab.label}
                  </S.Path>
                </div>
              </Link>
            </S.Menu>
          );
        })}
      </S.MenuWrap>
    </S.Category>
  );
};

export default Category;
