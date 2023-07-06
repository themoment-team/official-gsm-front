import Image from 'next/image';

import { useGetPostDetail } from 'api/client';

import * as S from './style';

interface PostContentProps {
  postSeq: number;
}

const PostContent: React.FC<PostContentProps> = ({ postSeq }) => {
  const { data } = useGetPostDetail(postSeq);

  return (
    <>
      {data && (
        <S.ContentWrapper>
          {data.fileInfo.map((file, index) => (
            <S.ImageWrapper key={index}>
              <Image src={file.fileUrl} alt={file.fileName} fill />
            </S.ImageWrapper>
          ))}
          <S.ContentText>{data?.postContent}</S.ContentText>
        </S.ContentWrapper>
      )}
    </>
  );
};

export default PostContent;
