import { WriteButton, FileButton, WriterAndDate } from 'admin/components';
import type { ContentPropsType } from 'api/client';

import * as S from './style';

const PostContent: React.FC<ContentPropsType> = ({
  post: { postWriter, postTitle, createdAt },
  fileInfo,
  description,
}) => (
  <S.PostContentWrapper>
    <S.Title>{postTitle}</S.Title>
    <WriterAndDate weight={400} createdAt={createdAt} postWriter={postWriter} />
    <WriteButton isEdit={true} />
    <S.Horizon />
    <S.Content>{description}</S.Content>
    <S.Horizon />
    {fileInfo[0] && (
      <>
        <S.FileTitle>첨부 파일</S.FileTitle>
        <div>
          {fileInfo.map((item, i) => (
            <FileButton key={i} fileInfo={item} />
          ))}
        </div>
      </>
    )}
  </S.PostContentWrapper>
);

export default PostContent;
