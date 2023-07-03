import { WriterAndDate } from 'ui';

import * as S from './style';

interface ListPagePostCardProps {
  postIndex: number;
  postTitle: string;
  postWriter: string;
  postDate: string;
}

const ListPagePostCard: React.FC<ListPagePostCardProps> = ({
  postIndex,
  postTitle,
  postWriter,
  postDate,
}) => (
  <S.PostCard>
    <S.PostIndex>#{postIndex}</S.PostIndex>
    <S.PostTitle>{postTitle}</S.PostTitle>
    <WriterAndDate postWriter={postWriter} createdAt={postDate} />
  </S.PostCard>
);

export default ListPagePostCard;
