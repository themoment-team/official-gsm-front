import { WriteButton, FileButton, WriterAndDate } from 'admin/components';

import * as S from './style';

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

interface PostContentProps {
  fileInfo: FileInfo[];
  description: string;
  post: PostType;
}

const PostContent: React.FC<PostContentProps> = ({
  post: { postWriter, postTitle, createdAt, fileIsExist },
  fileInfo,
  description,
}) => (
  <S.PostContentWrapper>
    <S.Title>{postTitle}</S.Title>
    <WriterAndDate weight={400} createdAt={createdAt} postWriter={postWriter} />
    <WriteButton isEdit={true} />
    <S.Horizon />
    <S.Content>{description}</S.Content>
    <S.Horizon />
    {fileIsExist && (
      <>
        <S.FileTitle>첨부 파일</S.FileTitle>
        <div>
          {fileInfo.map((item, i) => (
            <FileButton key={i} fileInfo={item} />
          ))}
        </div>
      </>
    )}
  </S.PostContentWrapper>
);

export default PostContent;
