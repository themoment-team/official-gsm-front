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
          {data.fileInfo.length > 0 && (
            <S.ImageWrapper>
              <Image
                src={data.fileInfo[0].fileUrl}
                alt={data.fileInfo[0].fileName}
                fill
              />
            </S.ImageWrapper>
          )}
          <S.ContentText>{data?.postContent}</S.ContentText>
        </S.ContentWrapper>
      )}
    </>
  );
};

export default PostContent;
