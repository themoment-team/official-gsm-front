import { useGetPostDetail } from 'api/client';

import { WriterAndDate } from 'ui';

import * as S from './style';

interface PostDetailHeadProps {
  postSeq: number;
}

const PostDetailProps: React.FC<PostDetailHeadProps> = ({ postSeq }) => {
  const { data } = useGetPostDetail(postSeq);

  return (
    <>
      {data && (
        <S.DetailWrapper>
          <S.CategoryText>📢 공지사항</S.CategoryText>
          <S.Title>{data.postTitle}</S.Title>
          <WriterAndDate
            postWriter={data.postWriter}
            createdAt={data.createdAt}
          />
        </S.DetailWrapper>
      )}
    </>
  );
};

export default PostDetailProps;
