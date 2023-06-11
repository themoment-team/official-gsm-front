import { FileButton, WriterAndDate, EditButton } from 'admin/components';

import type { PostDetailType } from 'api/client';

import * as S from './style';

interface CommonDetailProps {
  data: PostDetailType;
}

const CommonDetail: React.FC<CommonDetailProps> = ({
  data: { postTitle, createdAt, postWriter, fileInfo } = {
    postTitle: '',
    createdAt: '',
    postWriter: '',
    fileInfo: [],
  },
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
    <S.Content>{createdAt}</S.Content>
    <S.Horizon />
    {fileInfo?.length !== 0 && (
      <>
        <S.FileTitle>첨부 파일</S.FileTitle>
        <S.FileList>
          {fileInfo?.map((item, i) => (
            <FileButton key={i} fileInfo={item} />
          ))}
        </S.FileList>
      </>
    )}
  </S.CommonDetailWrapper>
);

export default CommonDetail;
