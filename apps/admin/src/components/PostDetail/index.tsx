import styled from '@emotion/styled';

import { CommonDetail, Carousel } from 'admin/components';
import type { DetailPropsType } from 'admin/types';

const PostDetail: React.FC<DetailPropsType> = ({
  post,
  fileInfo,
  description,
}) => (
  <NoticeWrapper>
    {fileInfo[0] && <Carousel fileInfo={fileInfo} isGallery={false} />}
    <CommonDetail post={post} fileInfo={fileInfo} description={description} />
  </NoticeWrapper>
);

export default PostDetail;

const NoticeWrapper = styled.div`
  display: flex;
`;
