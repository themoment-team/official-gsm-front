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

interface GalleryContentProps {
  fileInfo: FileInfo[];
  description: string;
  post: PostType;
}

const GalleryContent: React.FC<GalleryContentProps> = ({
  post,
  fileInfo,
  description,
}) => (
  <>
    <Carousel
      thumbnailUrl={post.thumbnailUrl}
      fileInfo={fileInfo}
      isGallery={true}
    />
    <PostContent post={post} fileInfo={fileInfo} description={description} />
  </>
);

export default GalleryContent;
