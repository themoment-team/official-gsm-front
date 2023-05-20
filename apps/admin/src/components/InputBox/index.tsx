import { css } from "@emotion/react";
import * as S from "./style";

interface HandleInput {
  width: string;
  height: string;
  placeholder: string;
}

const InputBox: React.FC<HandleInput> = ({ width, height, placeholder }) => {
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

export default InputBox;
