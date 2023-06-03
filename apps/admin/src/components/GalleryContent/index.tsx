import * as S from './style';
import Image from 'next/image';
import { WriteButton, FileButton } from 'admin/components';

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
      <S.CarouselBar></S.CarouselBar>
      <S.Title>{postTitle}</S.Title>
      <WriteButton isEdit={true} />
      <S.Horizon />
      <S.Content>{description}</S.Content>
      <S.Horizon />
      <S.FileTitle>첨부 파일</S.FileTitle>
      <div>
        {fileInfo.map((item) => {
          return <FileButton fileInfo={item} />;
        })}
      </div>
    </>
  );
};

export default GalleryContent;
