import { PostContent, PostDetailHead } from 'client/components';

import { useGetPostDetail } from 'api/client';

import { FileButton } from 'ui';

import * as S from './style';

interface PostPageProps {
  postSeq: number;
}

const PostPage: React.FC<PostPageProps> = ({ postSeq }) => {
  const { data } = useGetPostDetail(postSeq);

  return (
    <S.PostPage>
      <PostDetailHead postSeq={postSeq} />
      <S.ContentWrapper>
        <PostContent postSeq={postSeq} />
      </S.ContentWrapper>
      <S.Line />
      {data?.fileInfo.map((file, index) => (
        <FileButton key={index} file={file} />
      ))}
    </S.PostPage>
  );
};

export default PostPage;
