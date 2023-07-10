import { useGetPostDetail } from 'api/client';

import { categoryTitle } from 'common';

import { WriterAndDate } from 'ui';

import * as S from './style';

interface PostDetailHeadProps {
  postSeq: number;
}

const categories = {
  NOTICE: 'notice',
  FAMILY_NEWSLETTER: 'newsletter',
  EVENT_GALLERY: 'gallery',
} as const;

const PostDetailHead: React.FC<PostDetailHeadProps> = ({ postSeq }) => {
  const { data } = useGetPostDetail(postSeq);
  return (
    <>
      {data && (
        <S.DetailWrapper>
          <S.CategoryText>
            {categoryTitle[categories[data.category]]}
          </S.CategoryText>
          <S.Title>{data.postTitle}</S.Title>
          <WriterAndDate
            workspace='client'
            postWriter={data.postWriter}
            createdAt={data.createdAt}
          />
        </S.DetailWrapper>
      )}
    </>
  );
};
export default PostDetailHead;
