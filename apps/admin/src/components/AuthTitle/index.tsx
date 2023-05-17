import * as S from "./style";

interface AuthTitleProps {
  titleArray: string[];
  textAlign?: "left" | "center" | "right";
}

const AuthTitle: React.FC<AuthTitleProps> = ({ titleArray }) => {
  return (
    <S.TitleWrpapper>
      {titleArray.map((text, index) => (
        <S.Title key={index}>{text}</S.Title>
      ))}
    </S.TitleWrpapper>
  );
};

export default AuthTitle;
