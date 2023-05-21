import { css } from "@emotion/react";
import { Title } from "./style";

interface AuthTitleProps {
  children: React.ReactNode;
  textAlign?: "left" | "center" | "right";
  marginTopREM?: number;
}

/**
 * `auth/*` path 에서 사용되는 타이틀
 *
 * @prop children: React.ReactNode
 * @prop textAlign: "left" | "center" | "right" - 타이틀 정렬 방식
 * @prop marginTopREM: number - default = 2.5rem
 */
const AuthTitle: React.FC<AuthTitleProps> = ({
  children,
  textAlign = "left",
  marginTopREM,
}) => {
  return (
    <Title
      css={css`
        margin-top: ${marginTopREM && `${marginTopREM}rem`};
        text-align: ${textAlign};
      `}
    >
      {children}
    </Title>
  );
};

export default AuthTitle;
