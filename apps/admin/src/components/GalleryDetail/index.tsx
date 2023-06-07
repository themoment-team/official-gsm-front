import { CommonDetail, Carousel } from 'admin/components';

import type { ContentPropsType } from 'admin/types';

const GalleryDetail: React.FC<ContentPropsType> = ({
  post,
  fileInfo,
  description,
}) => (
  <>
    <Carousel fileInfo={fileInfo} isGallery={true} />
    <CommonDetail post={post} fileInfo={fileInfo} description={description} />
  </>
);

export default GalleryDetail;
