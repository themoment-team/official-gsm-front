import styled from '@emotion/styled';

import { CommonDetail, PostCarousel } from 'admin/components';

import type { PostDetailType } from 'api/client';

interface PostDetailProps {
  data?: PostDetailType;
}

const PostDetail: React.FC<PostDetailProps> = ({ data }) => (
  <NoticeWrapper>
    {data?.fileInfo[0] && <PostCarousel fileInfo={data.fileInfo} />}
    <CommonDetail data={data} />
  </NoticeWrapper>
);

export default PostDetail;

const NoticeWrapper = styled.div`
  display: flex;
`;
