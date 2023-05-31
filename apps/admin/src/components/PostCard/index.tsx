import * as S from "./style";
import { DateComponent } from "ui";

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
        <DateComponent createdAt={createdAt}></DateComponent>
      </S.WriterDateWrap>
    </S.NoticeCard>
  );
};

export default PostCard;
