"use client";

import { css } from "@emotion/react";
import * as S from "./style";
import { DetailedHTMLProps, InputHTMLAttributes, useRef } from "react";
import { InputValueResetBtnIcon } from "../../assets";

interface InputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  width?: string;
  height?: string;
  resetBtn?: boolean;
}

const Input: React.FC<InputProps> = ({
  width,
  height,
  resetBtn = false,
  ref = null,
  ...attributes
}) => {
  const handleDivClick = () => {
    if (ref) {
      console.log(ref.current.value);
      inputRef.current.value = "";
      inputRef.current.focus();
    }
  };

  return (
    <S.InputWrapper
      isResetBtn={resetBtn}
      css={css`
        width: ${width};
        height: ${height};
      `}
    >
      <S.InputBox {...attributes} ref={ref} />
      {resetBtn && (
        <S.InputValueResetBtn onClick={() => handleDivClick()}>
          <InputValueResetBtnIcon />
        </S.InputValueResetBtn>
      )}
    </S.InputWrapper>
  );
};

export default Input;
