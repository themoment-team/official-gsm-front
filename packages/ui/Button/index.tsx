import { css } from "@emotion/react";
import * as S from "./style";
import LoadingCircle from "../LoadingCircle";

interface ButtonProps {
  children?: React.ReactNode;
  disabled?: boolean;
  isLoading?: boolean;
  widthREM?: number;
}

const Button: React.FC<ButtonProps> = ({
  children = "",
  disabled = false,
  isLoading = false,
  widthREM,
}) => {
  return (
    <S.Button
      css={css`
        background: ${disabled && "#dcdcdc"};
        pointer-events: ${(disabled || isLoading) && "none"};
        width: ${widthREM && `${widthREM}rem`};
      `}
    >
      {isLoading ? <LoadingCircle /> : children}
    </S.Button>
  );
};

export default Button;
