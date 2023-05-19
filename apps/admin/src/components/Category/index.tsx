import * as S from "./style";
import { css } from "@emotion/react";
interface CategoryProps {
  menu: string[];
}

const Category = ({ menu }: CategoryProps) => {
  return (
    <S.Category>
      <S.MenuWrap>
        {menu.map((i) => {
          return (
            <S.Menu key={i}>
              <div
                css={css`
                  display: flex;
                  align-items: center;
                  justify-content: space-evenly;
                  width: 85px;
                `}
              >
                <S.Dot />
                {i}
              </div>
            </S.Menu>
          );
        })}
      </S.MenuWrap>
    </S.Category>
  );
};

export default Category;
