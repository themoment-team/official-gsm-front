"use client";

import { css } from "@emotion/react";
import * as S from "./style";
import {
  DetailedHTMLProps,
  InputHTMLAttributes,
  useState,
  useRef,
} from "react";
import { InputValueResetBtn } from "../../assets";

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
  ...attributes
}) => {
  const [inputValue, setInputValue] = useState<string>("");
  const [isInputFocused, setIsInputFocused] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleDivClick = () => {
    if (inputRef.current) {
      setIsInputFocused(true);
      setInputValue("");
      inputRef.current.focus();
    }
  };

  return (
    <S.InputWrapper isResetBtn={resetBtn}>
      {resetBtn ? (
        <div
          onClick={() => handleDivClick()}
          css={css`
            position: absolute;
            right: 1rem;
            cursor: pointer;
            opacity: 0;
            transition: ease-in-out 0.3s;
            ${isInputFocused
              ? css`
                  opacity: 1;
                `
              : ""}
          `}
        >
          <InputValueResetBtn />
        </div>
      ) : (
        ""
      )}
      <S.InputBox
        css={css`
          width: ${width};
          height: ${height};
        `}
        {...attributes}
        ref={inputRef}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onFocus={() => setIsInputFocused(true)}
        onBlur={() => setIsInputFocused(false)}
      />
    </S.InputWrapper>
  );
};

export default Input;
