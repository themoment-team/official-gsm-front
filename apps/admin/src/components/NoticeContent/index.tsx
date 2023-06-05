import styled from '@emotion/styled';

import { PostContent, Carousel } from 'admin/components';

interface FileInfo {
  fileUrl: string;
  fileName: string;
}

interface PostType {
  postSeq: number;
  postTitle: string;
  postWriter: string;
  createdAt: string;
  thumbnailUrl: string | null;
  fileIsExist: boolean;
}

interface NoticeContentProps {
  fileInfo: FileInfo[];
  description: string;
  post: PostType;
}

const NoticeContent: React.FC<NoticeContentProps> = ({
  post,
  fileInfo,
  description,
}) => (
  <NoticeWrapper>
    {post.fileIsExist && <Carousel fileInfo={fileInfo} isGallery={false} />}
    <PostContent post={post} fileInfo={fileInfo} description={description} />
  </NoticeWrapper>
);

export default NoticeContent;

const NoticeWrapper = styled.div`
  display: flex;
`;
