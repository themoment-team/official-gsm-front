import type { DetailedHTMLProps, TextareaHTMLAttributes } from 'react';
import { forwardRef } from 'react';

import { css } from '@emotion/react';

import * as S from './style';

interface TextAreaProps
  extends DetailedHTMLProps<
    TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  > {
  width?: string;
  height?: string;
  isError?: boolean;
  borderRadius?: string;
}

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ width, height, isError, borderRadius, ...attributes }, ref) => (
    <S.TextAreaBox
      {...attributes}
      ref={ref}
      css={css`
        width: ${width};
        height: ${height};
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
  )
);

TextArea.displayName = 'TextArea';

export default TextArea;
