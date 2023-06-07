import type { ContentType } from 'api/client';

import { WriterAndDate } from 'admin/components';

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
    <WriterAndDate postWriter={postWriter} createdAt={createdAt} />
  </S.PostCard>
);

export default PostCard;
