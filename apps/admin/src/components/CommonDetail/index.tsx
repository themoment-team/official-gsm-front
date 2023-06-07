import { FileButton, WriterAndDate, EditButton } from 'admin/components';

import type { ContentPropsType } from 'api/client';

import * as S from './style';

const CommonDetail: React.FC<ContentPropsType> = ({
  post: { postWriter, postTitle, createdAt },
  fileInfo,
  description,
}) => (
  <S.CommonDetailWrapper>
    <S.Title>{postTitle}</S.Title>
    <WriterAndDate
      margin='0.75rem 0'
      createdAt={createdAt}
      postWriter={postWriter}
    />
    <EditButton href='/post/edit' />
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
  </S.CommonDetailWrapper>
);

export default CommonDetail;
