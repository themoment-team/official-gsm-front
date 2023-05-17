import { css } from "@emotion/react";
import * as S from "./style";

interface ButtonProps {
  children?: React.ReactNode;
  disabled?: boolean;
  isLoading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children = "",
  disabled = false,
  isLoading = false,
}) => {
  return (
    <S.Button
      css={css`
        background: ${disabled && "#dcdcdc"};
        pointer-events: ${(disabled || isLoading) && "none"};
      `}
    >
      {isLoading ? "" : children}
    </S.Button>
  );
};

export default Button;
