import { PostContent, Carousel } from 'admin/components';
import styled from '@emotion/styled';

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
}) => {
  return (
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
};

export default NoticeContent;

const NoticeWrapper = styled.div`
  display: flex;
`;
