'use client';

import styled from '@emotion/styled';

import { GalleryDetail, PostDetail, Header } from 'admin/components';

import { redirect } from 'next/navigation';

import { useGetPostDetail } from 'api/client';

interface DetailPageProps {
  params: { seq: string };
}

export default function DetailPage({ params: { seq } }: DetailPageProps) {
  if (Number.isNaN(seq)) {
    redirect('/');
  }

  const { data } = useGetPostDetail(Number(seq));

  const post = {
    data.postTitle,
    data.postWriter,
    data.postContent,
    data.category,
    data.createdAt
  }

  return (
    <DetailPageWrapper>
      <Header hasNotification={false} name={'정문정'} />
      {
        data?.category === 'EVENT_GALLERY' ?
          <GalleryDetail
            post={post}
            fileInfo={data?.fileInfo}
            description={data?.postContent}
          />
        : <PostDetail post={post}
        fileInfo={data?.fileInfo}
        description={data?.postContent}>
        </PostDetail>
      }
    </DetailPageWrapper>
  );
}

const DetailPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
