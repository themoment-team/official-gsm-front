import { CommonDetail } from 'admin/components';
import { GalleryCarousel } from 'admin/components';

import type { PostDetailType } from 'api/client';

interface GalleryDetailProps {
  data: PostDetailType;
}

const GalleryDetail: React.FC<GalleryDetailProps> = ({ data }) => (
  <>
    <GalleryCarousel fileInfo={data.fileInfo} />
    <CommonDetail data={data} />
  </>
);

export default GalleryDetail;
