import type { ContentType } from 'api/client';

import { DateComponent } from 'ui';

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
    <S.WriterDateWrap>
      <S.Writer>{postWriter}</S.Writer>
      <S.Dot />
      <DateComponent createdAt={createdAt} />
    </S.WriterDateWrap>
  </S.PostCard>
);

export default PostCard;
