import styled from '@emotion/styled';
import { minutesToMs } from 'common';

import { CommonDetail, PostCarousel } from 'admin/components';

import { useGetPostDetail } from 'api/client';

interface PostDetailProps {
  postSeq: number;
}

const PostDetail: React.FC<PostDetailProps> = ({ postSeq }) => {
  const { data } = useGetPostDetail(postSeq, {
    cacheTime: minutesToMs(30),
    staleTime: minutesToMs(3),
  });

  return (
    <NoticeWrapper>
      {data?.fileInfo[0] && <PostCarousel postSeq={postSeq} />}
      <CommonDetail postSeq={postSeq} />
    </NoticeWrapper>
  );
};

export default PostDetail;

const NoticeWrapper = styled.div`
  display: flex;
`;
