import type { DetailedHTMLProps, InputHTMLAttributes } from 'react';
import { forwardRef } from 'react';

import { css } from '@emotion/react';

import { InputValueResetBtnIcon } from 'admin/assets';
import { useForwardRef } from 'admin/hooks';

import * as S from './style';

interface InputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  width?: string;
  height?: string;
  isError?: boolean;
  resetBtn?: boolean;
  marginTop?: string;
  borderRadius?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      width,
      height,
      isError,
      resetBtn = false,
      marginTop,
      borderRadius,
      ...attributes
    },
    ref
  ) => {
    const inputRef = useForwardRef<HTMLInputElement>(ref);

    const resetButtonClick = () => {
      if (inputRef) {
        inputRef.current.value = '';
        inputRef.current.focus();
      }
    };

    return (
      <S.InputWrapper
        css={css`
          width: ${width};
          height: ${height};
          margin-top: ${marginTop};
        `}
      >
        <S.InputBox
          borderRadius={borderRadius}
          {...attributes}
          ref={inputRef}
          css={
            isError &&
            css`
              border-color: #f93535;
              :hover {
                border-color: #f93535;
              }
              :focus {
                border-color: #f93535;
              }
            `
          }
        />
        {resetBtn && (
          <S.InputValueResetBtn onClick={resetButtonClick} type='button'>
            <InputValueResetBtnIcon />
          </S.InputValueResetBtn>
        )}
      </S.InputWrapper>
    );
  }
);

Input.displayName = 'Input';

export default Input;
