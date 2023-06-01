import { css } from '@emotion/react';
import * as S from './style';

interface TextAreaProps {
  width: string;
  height: string;
  placeholder: string;
}
const TextArea: React.FC<TextAreaProps> = ({ width, height, placeholder }) => {
  return (
    <S.TextAreaBox
      css={css`
        width: ${width};
        height: ${height};
      `}
      placeholder={placeholder}
    />
  );
};

export default TextArea;
