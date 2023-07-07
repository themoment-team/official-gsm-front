import { css } from '@emotion/react';

import { PostContent, PostDetailHead, ReturnToList } from 'client/components';

import { useGetPostDetail } from 'api/client';

import { FileButton } from 'ui';

import * as S from './style';

interface AssembledPostProps {
  postSeq: number;
}

const AssembledPost: React.FC<AssembledPostProps> = ({ postSeq }) => {
  const { data } = useGetPostDetail(postSeq);

  return (
    <>
      {data && (
        <S.PostPage>
          <S.ContentWrapper>
            <div>
              <PostDetailHead postSeq={postSeq} />
              <S.Line
                css={css`
                  margin-top: 1.8125rem;
                `}
              />
            </div>
            {(data.fileInfo.length > 0 || data.postContent) && (
              <PostContent postSeq={postSeq} />
            )}
            {data.fileInfo.length > 0 && (
              <S.FileWrapper>
                {data.fileInfo.map((file, index) => (
                  <FileButton key={index} file={file} />
                ))}
              </S.FileWrapper>
            )}
            {(data.fileInfo.length > 0 || data.postContent) && <S.Line />}
            <ReturnToList category={data.category} />
          </S.ContentWrapper>
        </S.PostPage>
      )}
    </>
  );
};

export default AssembledPost;
