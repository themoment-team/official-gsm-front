import { css } from "@emotion/react";
import * as S from "./style";

interface AuthTitleProps {
  titleArray: string[];
  textAlign?: "left" | "center" | "right";
}

/**
 * `auth/*` path 에서 사용되는 타이틀
 *
 * @prop titleArray: string[] - 줄 단위(\n)로 문자열을 나눈 배열을 받음
 * @prop textAlign: "left" | "center" | "right" - 타이틀 정렬 방식
 */
const AuthTitle: React.FC<AuthTitleProps> = ({
  titleArray,
  textAlign = "left",
}) => {
  return (
    <S.TitleWrapper
      css={css`
        text-align: ${textAlign};
      `}
    >
      {titleArray.map((text, index) => (
        <S.Title key={index}>{text}</S.Title>
      ))}
    </S.TitleWrapper>
  );
};

export default AuthTitle;
