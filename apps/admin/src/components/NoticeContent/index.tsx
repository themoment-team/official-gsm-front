import styled from '@emotion/styled';

import { PostContent, Carousel } from 'admin/components';
import type { ContentPropsType } from 'api/client';

const NoticeContent: React.FC<ContentPropsType> = ({
  post,
  fileInfo,
  description,
}) => (
  <NoticeWrapper>
    {fileInfo[0] && <Carousel fileInfo={fileInfo} isGallery={false} />}
    <PostContent post={post} fileInfo={fileInfo} description={description} />
  </NoticeWrapper>
);

export default NoticeContent;

const NoticeWrapper = styled.div`
  display: flex;
`;
