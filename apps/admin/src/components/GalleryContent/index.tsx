import * as S from './style';
import Image from 'next/image';

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
  post: { thumbnailUrl, postWriter, postTitle, createdAt },
  fileInfo,
  description,
}) => {
  return (
    <>
      <S.IMGWrapper>
        <Image alt='content image' src={thumbnailUrl ?? ''} fill />
      </S.IMGWrapper>
    </>
  );
};

export default GalleryContent;
