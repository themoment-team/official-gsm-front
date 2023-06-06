import type { DetailedHTMLProps, InputHTMLAttributes} from "react";


import { css } from "@emotion/react";

import * as S from "./style";

interface TextAreaProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  width: string;
  height: string;
  placeholder: string;
}
const TextArea: React.FC<TextAreaProps> = ({ width, height, placeholder }) => (
    <S.TextAreaBox
      css={css`
        width: ${width};
        height: ${height};
        border-radius: ${width === "36.125rem" ? "0.625rem" : "1.25rem"};
      `}
      placeholder={placeholder}
    />
  );

export default TextArea;
