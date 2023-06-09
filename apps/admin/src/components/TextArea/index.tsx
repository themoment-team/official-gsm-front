import type { DetailedHTMLProps, TextareaHTMLAttributes } from 'react';
import { forwardRef } from 'react';

import { css } from '@emotion/react';

import * as S from './style';
import { useForwardRef } from 'admin/hooks';

interface TextAreaProps
  extends DetailedHTMLProps<
    TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  > {
  width?: string;
  height?: string;
  isError?: boolean;
  marginTop?: string;
  borderRadius?: string;
}

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ width, height, isError, marginTop, borderRadius, ...attributes }, ref) => {
    return (
      <S.TextAreaWrapper
        css={css`
          width: ${width};
          height: ${height};
        `}
      >
        <S.TextAreaBox
          {...attributes}
          ref={ref}
          css={css`
            border-radius: ${borderRadius};
            ${isError &&
            css`
              color: #f93535;
              border-color: #f93535;
              :hover {
                border-color: #f93535;
              }
              :focus {
                border-color: #f93535;
                color: #f93535;
              }
            `}
          `}
        />
      </S.TextAreaWrapper>
    );
  }
);

TextArea.displayName = 'TextArea';

export default TextArea;
