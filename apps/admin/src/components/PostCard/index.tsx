import { WriterAndDate } from 'admin/components';

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
    <WriterAndDate postWriter={writer} createdAt={createdAt} />
  </S.NoticeCard>
);

export default PostCard;
