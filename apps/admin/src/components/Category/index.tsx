import * as S from "./style";
import { css } from "@emotion/react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const test = [
  { path: "*/notice", label: "공지사항" },
  { path: "*/gallery", label: "행사갤러리" },
  { path: "*/familyCorrespondence", label: "가정통신문" },
];

const Category = () => {
  const pathname = usePathname();

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
                  <S.Path isActive={pathname === tab.path}>{tab.label}</S.Path>
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
