import { WriterAndDate } from 'ui';

import type { ContentType } from 'types';

import * as S from './style';

export interface PostCardProps {
  postIndex: number;
  post: Omit<ContentType, 'thumbnailUrl' | 'contentPreview'>;
}

const PostCard: React.FC<PostCardProps> = ({
  postIndex,
  post: { postSeq, postTitle, postWriter, createdAt },
}) => (
  <S.PostCard href={`/post/${postSeq}`}>
    <S.IndexAndTitle>
      <S.PostIndex>#{postIndex}</S.PostIndex>
      <S.PostTitle>{postTitle}</S.PostTitle>
    </S.IndexAndTitle>
    <WriterAndDate
      workspace='client'
      postWriter={postWriter}
      createdAt={createdAt}
    />
  </S.PostCard>
);

export default PostCard;
