import { WriterAndDate } from 'ui';

import type { ContentType } from 'types';

import * as S from './style';

interface PostCardProps {
  post: ContentType;
}

const PostCard: React.FC<PostCardProps> = ({
  post: { postSeq, postTitle, contentPreview, postWriter, createdAt },
}) => (
  <S.PostCard href={`/post/${postSeq}`}>
    <S.TitleWrap>
      <S.Title>{postTitle}</S.Title>
      <S.ContentPreview>{contentPreview}</S.ContentPreview>
    </S.TitleWrap>
    <WriterAndDate
      workspace='admin'
      postWriter={postWriter}
      createdAt={createdAt}
    />
  </S.PostCard>
);

export default PostCard;
