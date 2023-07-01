import { useGetPostDetail } from 'api/client';

import { WriterAndDate } from 'ui';

import * as S from './style';

interface PostDetailHeadProps {
  postSeq: number;
}

const categories = {
  NOTICE: '📢 공지사항',
  FAMILY_NEWSLETTER: '📃 가정통신문',
  EVENT_GALLERY: '📷 행사 갤러리',
};

const PostDetailProps: React.FC<PostDetailHeadProps> = ({ postSeq }) => {
  const { data } = useGetPostDetail(postSeq);
  return (
    <>
      {data && (
        <S.DetailWrapper>
          <S.CategoryText>{categories[data.category]}</S.CategoryText>
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
