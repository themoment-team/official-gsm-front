import styled from '@emotion/styled';

import { CommonDetail } from 'admin/components';
import { PostCarousel } from 'admin/components/Carousel';
import type { DetailPropsType } from 'admin/types';

const PostDetail: React.FC<DetailPropsType> = ({
  post,
  fileInfo,
  description,
}) => (
  <NoticeWrapper>
    {fileInfo[0] && <PostCarousel fileInfo={fileInfo} />}
    <CommonDetail post={post} fileInfo={fileInfo} description={description} />
  </NoticeWrapper>
);

export default PostDetail;

const NoticeWrapper = styled.div`
  display: flex;
`;
