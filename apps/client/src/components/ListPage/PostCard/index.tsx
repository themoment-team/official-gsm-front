import { formatDate } from 'common';

import { WriterAndDate } from 'ui';

import * as S from './style';

export interface ListPagePostCardProps {
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
    <S.IndexAndTitle>
      <S.PostIndex>#{formatDate(postIndex)}</S.PostIndex>
      <S.PostTitle>{postTitle}</S.PostTitle>
    </S.IndexAndTitle>
    <WriterAndDate postWriter={postWriter} createdAt={postDate} />
  </S.PostCard>
);

export default ListPagePostCard;
