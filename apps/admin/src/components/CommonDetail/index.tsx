import { FileButton, WriterAndDate, EditButton } from 'admin/components';
import type { DetailPropsType } from 'admin/types';

import * as S from './style';

const CommonDetail: React.FC<DetailPropsType> = ({
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
