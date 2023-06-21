import { CommonDetail } from 'admin/components';
import { GalleryCarousel } from 'admin/components';

interface GalleryDetailProps {
  postSeq: number;
}

const GalleryDetail: React.FC<GalleryDetailProps> = ({ postSeq }) => (
  <>
    <GalleryCarousel postSeq={postSeq} />
    <CommonDetail postSeq={postSeq} />
  </>
);

export default GalleryDetail;
