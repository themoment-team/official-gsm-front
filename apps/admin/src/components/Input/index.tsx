import { css } from "@emotion/react";
import * as S from "./style";

interface InputProps {
  width: string;
  height: string;
  placeholder: string;
}

const Input: React.FC<InputProps> = ({ width, height, placeholder }) => {
  return (
    <label>
      <S.InputBox
        css={css`
          width: ${width};
          height: ${height};
          cursor: pointer;
        `}
        placeholder={placeholder}
      />
    </label>
  );
};

export default Input;
