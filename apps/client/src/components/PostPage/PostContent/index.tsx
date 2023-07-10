import Image from 'next/image';

import { useGetPostDetail } from 'api/client';

import { filterImages } from 'common';

import * as S from './style';

interface PostContentProps {
  postSeq: number;
}

const PostContent: React.FC<PostContentProps> = ({ postSeq }) => {
  const { data } = useGetPostDetail(postSeq);

  const imageFiles = filterImages(data?.fileInfo);

  return (
    <>
      {data && (
        <S.ContentWrapper>
          {imageFiles.map((file, index) => (
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
