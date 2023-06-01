import { DateComponent } from 'ui';

import * as S from './style';

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
}) => (
  <S.NoticeCard>
    <S.TitleWrap>
      <S.Title>{title}</S.Title>
      <S.SubTitle>{subtitle}</S.SubTitle>
    </S.TitleWrap>
    <S.WriterDateWrap>
      <S.Writer>{writer}</S.Writer>
      <S.Dot />
      <DateComponent createdAt={createdAt} />
    </S.WriterDateWrap>
  </S.NoticeCard>
);

export default PostCard;
