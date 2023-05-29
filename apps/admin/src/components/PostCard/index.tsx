import * as S from "./style";
import DateComponent from "ui/DateComponent";

interface PostCardProps {
  title: string;
  subtitle: string;
  writer: string;
  createdAt: string;
}

const PostCard: React.FC<PostCardProps> = ({
  title,
  subtitle,
  writer,
  createdAt,
}) => {
  return (
    <S.NoticeCard>
      <S.TitleWrap>
        <S.Title>{title}</S.Title>
        <S.SubTitle>{subtitle}</S.SubTitle>
      </S.TitleWrap>
      <S.WriterDateWrap>
        <S.Writer>{writer}</S.Writer>
        <S.Dot />
        <S.Date>
          <DateComponent createdAt={createdAt}></DateComponent>
        </S.Date>
      </S.WriterDateWrap>
    </S.NoticeCard>
  );
};

export default PostCard;
