import { EditButton, DeletePostButton } from 'admin/components';

import { useGetPostDetail } from 'api/client';

import { WriterAndDate, FileButton } from 'ui';

import * as S from './style';

interface CommonDetailProps {
  postSeq: number;
}

const CommonDetail: React.FC<CommonDetailProps> = ({ postSeq }) => {
  const { data } = useGetPostDetail(postSeq);

  const DeletePost = () => {
    alert('');
  };

  return (
    <>
      {data && (
        <S.CommonDetailWrapper>
          <S.Title>{data.postTitle}</S.Title>
          <WriterAndDate
            margin='0.75rem 0'
            createdAt={data.createdAt}
            postWriter={data.postWriter}
          />
          <S.ButtonWrapper>
            <EditButton href='/post/edit' />
            <DeletePostButton onClick={DeletePost} />
          </S.ButtonWrapper>
          <S.Horizon />
          <S.Content>{data.postContent}</S.Content>
          <S.Horizon />
          {data.fileInfo.length !== 0 && (
            <>
              <S.FileTitle>첨부 파일</S.FileTitle>
              <S.FileList>
                {data.fileInfo.map((item, i) => (
                  <FileButton key={i} file={item} />
                ))}
              </S.FileList>
            </>
          )}
        </S.CommonDetailWrapper>
      )}
    </>
  );
};

export default CommonDetail;
