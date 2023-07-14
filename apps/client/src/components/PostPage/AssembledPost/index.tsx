/** @jsxImportSource @emotion/react */

'use client';

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
    <S.BackGround>
      {data && (
        <S.PostPage
          css={
            !data.postContent &&
            css`
              gap: 2.5rem;
            `
          }
        >
          <PostDetailHead postSeq={postSeq} />
          {data.postContent && (
            <S.ContentWrapper>
              <PostContent postSeq={postSeq} />
              {data.fileInfo.length > 0 && (
                <S.FileWrapper>
                  {data.fileInfo.map((file, index) => (
                    <FileButton key={index} file={file} />
                  ))}
                </S.FileWrapper>
              )}
            </S.ContentWrapper>
          )}
          <ReturnToList category={data.category} />
        </S.PostPage>
      )}
    </S.BackGround>
  );
};

export default AssembledPost;
