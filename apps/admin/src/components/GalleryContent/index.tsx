import { PostContent, Carousel } from 'admin/components';

import { ContentPropsType } from 'api/client';

const GalleryContent: React.FC<ContentPropsType> = ({
  post,
  fileInfo,
  description,
}) => (
  <>
    <Carousel
      subnailUrl={post.thumbnailUrl}
      fileInfo={fileInfo}
      isGallery={true}
    />
    <PostContent post={post} fileInfo={fileInfo} description={description} />
  </>
);

export default GalleryContent;
