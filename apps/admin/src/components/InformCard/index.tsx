import * as S from "./style";

interface InformCardProps {
  title: string;
  subtitle: string;
  writer: string;
  date: string;
}

const InformCard = ({ title, subtitle, writer, date }: InformCardProps) => {
  return (
    <S.InformCard>
      <S.TitleWrap>
        <S.Title>{title}</S.Title>
        <S.SubTitle>{subtitle}</S.SubTitle>
      </S.TitleWrap>
      <S.WriterDateWrap>
        <S.Writer>{writer}</S.Writer>
        <S.Date>{date}</S.Date>
      </S.WriterDateWrap>
    </S.InformCard>
  );
};

export default InformCard;
