import * as S from "./style";

interface NoticeCardProps {
  title: string;
  subtitle: string;
  writer: string;
  date: string;
}

const NoticeCard = ({ title, subtitle, writer, date }: NoticeCardProps) => {
  return (
    <S.NoticeCard>
      <S.TitleWrap>
        <S.Title>{title}</S.Title>
        <S.SubTitle>{subtitle}</S.SubTitle>
      </S.TitleWrap>
      <S.WriterDateWrap>
        <S.Writer>{writer}</S.Writer>
        <S.Dot />
        <S.Date>{date}</S.Date>
      </S.WriterDateWrap>
    </S.NoticeCard>
  );
};

export default NoticeCard;
