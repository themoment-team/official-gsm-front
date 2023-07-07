import styled from '@emotion/styled';

import { filterImages } from 'common';

import { CommonDetail, PostCarousel } from 'admin/components';

import { useGetPostDetail } from 'api/client';

interface PostDetailProps {
  postSeq: number;
}

const PostDetail: React.FC<PostDetailProps> = ({ postSeq }) => {
  const { data } = useGetPostDetail(postSeq);

  const imageFiles = filterImages(data?.fileInfo);

  return (
    <NoticeWrapper>
      {imageFiles?.length > 0 && <PostCarousel postSeq={postSeq} />}
      <CommonDetail postSeq={postSeq} />
    </NoticeWrapper>
  );
};

export default PostDetail;

const NoticeWrapper = styled.div`
  display: flex;
`;
