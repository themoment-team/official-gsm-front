import { CommonDetail } from 'admin/components';
import { GalleryCarousel } from 'admin/components';
import type { DetailPropsType } from 'admin/types';

const GalleryDetail: React.FC<DetailPropsType> = ({
  post,
  fileInfo,
  description,
}) => (
  <>
    <GalleryCarousel fileInfo={fileInfo} />
    <CommonDetail post={post} fileInfo={fileInfo} description={description} />
  </>
);

export default GalleryDetail;
