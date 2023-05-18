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
        <S.Title></S.Title>
        <S.SubTitle></S.SubTitle>
      </S.TitleWrap>
      <S.WriterDateWrap>
        <S.Writer></S.Writer>
        <S.Date></S.Date>
      </S.WriterDateWrap>
    </S.InformCard>
  );
};

export default InformCard;
