import * as S from "./style";

interface HandleInput {
  width: string;
  height: string;
  placeholder: string;
}

const InputBox = ({ width, height, placeholder }: HandleInput) => {
  return <S.InputBox width={width} height={height} placeholder={placeholder} />;
};

export default InputBox;
