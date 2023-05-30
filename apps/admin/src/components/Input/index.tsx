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
}

const Input: React.FC<InputProps> = ({ width, height, ...attributes }) => {
  return (
    <S.InputBox
      css={css`
        width: ${width};
        height: ${height};
      `}
      {...attributes}
    />
  );
};

export default Input;
