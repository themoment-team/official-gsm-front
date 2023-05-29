import * as S from "./style";
import { css } from "@emotion/react";
import { usePathname } from "next/navigation";
import Link from "next/link";

interface CategoryProps {
  pathname?: string;
}
const test = [
  { path: "/notice", label: "공지사항" },
  { path: "/gallery", label: "행사갤러리" },
  { path: "/familyCorrespondence", label: "가정통신문" },
];

const Category: React.FC<CategoryProps> = ({ pathname }) => {
  // 실제 코드는 아래 변수를 활성화 시키고 pathname -> currentPath 로 변경시 적용됩니다..!
  // const currentPath = usePathname();
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
                  <S.Path isActive={pathname === tab.path}>
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
