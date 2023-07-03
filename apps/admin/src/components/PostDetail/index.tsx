import styled from '@emotion/styled';

import { CommonDetail, PostCarousel } from 'admin/components';

import { useGetPostDetail } from 'api/client';

interface PostDetailProps {
  postSeq: number;
}

const extentions = ['JPG', 'PNG', 'HEIC', 'JPEG', 'WEBP'];

const PostDetail: React.FC<PostDetailProps> = ({ postSeq }) => {
  const { data } = useGetPostDetail(postSeq);

  const imageFiles = data?.fileInfo.filter((file) =>
    extentions.includes(file.fileExtension)
  );

  return (
    <NoticeWrapper>
      {imageFiles?.length !== 0 && <PostCarousel postSeq={postSeq} />}
      <CommonDetail postSeq={postSeq} />
    </NoticeWrapper>
  );
};

export default PostDetail;

const NoticeWrapper = styled.div`
  display: flex;
`;
