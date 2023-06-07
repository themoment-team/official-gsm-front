import { PostContent, Carousel } from 'admin/components';

import type { ContentPropsType } from 'api/client';

const GalleryContent: React.FC<ContentPropsType> = ({
  post,
  fileInfo,
  description,
}) => (
  <>
    <Carousel fileInfo={fileInfo} isGallery={true} />
    <PostContent post={post} fileInfo={fileInfo} description={description} />
  </>
);

export default GalleryContent;
