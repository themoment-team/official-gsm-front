import { css } from "@emotion/react";
import * as S from "./style";
import { DetailedHTMLProps, InputHTMLAttributes } from "react";

interface InputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  width?: string;
  height?: string;
  marginTop?: string;
}

const Input: React.FC<InputProps> = ({
  width,
  height,
  marginTop,
  ...attributes
}) => {
  return (
    <S.InputBox
      css={css`
        width: ${width};
        height: ${height};
        margin-top: ${marginTop};
      `}
      {...attributes}
    />
  );
};

export default Input;
