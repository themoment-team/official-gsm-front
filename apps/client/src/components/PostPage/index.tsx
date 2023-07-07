import { css } from '@emotion/react';

import { PostContent, PostDetailHead, ReturnToList } from 'client/components';

import { useGetPostDetail } from 'api/client';

import { FileButton } from 'ui';

import * as S from './style';

interface PostPageProps {
  postSeq: number;
}

const PostPage: React.FC<PostPageProps> = ({ postSeq }) => {
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
            <PostContent postSeq={postSeq} />
            <S.FileWrapper>
              {data?.fileInfo.map((file, index) => (
                <FileButton key={index} file={file} />
              ))}
            </S.FileWrapper>
            <S.Line />
            <ReturnToList category={data.category} />
          </S.ContentWrapper>
        </S.PostPage>
      )}
    </>
  );
};

export default PostPage;
