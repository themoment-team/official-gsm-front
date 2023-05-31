import { css } from "@emotion/react";
import * as S from "./style";
import { DetailedHTMLProps, InputHTMLAttributes, forwardRef } from "react";
import { InputValueResetBtnIcon } from "admin/assets";
import { useForwardRef } from "admin/hooks";

interface InputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  width?: string;
  height?: string;
  resetBtn?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ width, height, resetBtn = false, ...attributes }, ref) => {
    const inputRef = useForwardRef<HTMLInputElement>(ref);

    const resetButtonClick = () => {
      if (inputRef) {
        inputRef.current.value = "";
        inputRef.current.focus();
      }
    };

    return (
      <S.InputWrapper
        css={css`
          width: ${width};
          height: ${height};
        `}
      >
        <S.InputBox {...attributes} ref={inputRef} />
        {resetBtn && (
          <S.InputValueResetBtn onClick={() => resetButtonClick()}>
            <InputValueResetBtnIcon />
          </S.InputValueResetBtn>
        )}
      </S.InputWrapper>
    );
  }
);

Input.displayName = "Input";

export default Input;
