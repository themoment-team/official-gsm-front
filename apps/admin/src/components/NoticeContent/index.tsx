import styled from '@emotion/styled';

import { PostContent, Carousel } from 'admin/components';

import { ContentPropsType } from 'api/client';

const NoticeContent: React.FC<ContentPropsType> = ({
  post,
  fileInfo,
  description,
}) => (
  <NoticeWrapper>
    {post.fileIsExist && (
      <Carousel
        thumbnailUrl={post.thumbnailUrl}
        fileInfo={fileInfo}
        isGallery={false}
      />
    )}
    <PostContent post={post} fileInfo={fileInfo} description={description} />
  </NoticeWrapper>
);

export default NoticeContent;

const NoticeWrapper = styled.div`
  display: flex;
`;
