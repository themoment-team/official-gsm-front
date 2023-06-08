import { CommonDetail, CarouselController } from 'admin/components';
import type { DetailPropsType } from 'admin/types';

const GalleryDetail: React.FC<DetailPropsType> = ({
  post,
  fileInfo,
  description,
}) => (
  <>
    <CarouselController fileInfo={fileInfo} isGallery={true} />
    <CommonDetail post={post} fileInfo={fileInfo} description={description} />
  </>
);

export default GalleryDetail;
