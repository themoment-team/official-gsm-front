import styled from '@emotion/styled';

import { CommonDetail, PostCarousel } from 'admin/components';
import type { DetailPropsType } from 'admin/types';

const PostDetail: React.FC<DetailPropsType> = ({
  post,
  fileInfo,
  description,
}) => (
  <NoticeWrapper>
    {fileInfo && <PostCarousel fileInfo={fileInfo} />}
    <CommonDetail post={post} fileInfo={fileInfo} description={description} />
  </NoticeWrapper>
);

export default PostDetail;

const NoticeWrapper = styled.div`
  display: flex;
`;
