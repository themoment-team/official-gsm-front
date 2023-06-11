'use client';

import { redirect } from 'next/navigation';

import styled from '@emotion/styled';

import { GalleryDetail, PostDetail, Header } from 'admin/components';

import { useGetPostDetail } from 'api/client';

interface DetailPageProps {
  params: { seq: string };
}

export default function DetailPage({ params: { seq } }: DetailPageProps) {
  if (Number.isNaN(seq)) {
    redirect('/');
  }

  const postSeq = Number(seq);

  const { data } = useGetPostDetail(postSeq);

  return (
    <DetailPageWrapper>
      <Header hasNotification={false} name={'정문정'} />
      {data &&
        (data.category === 'EVENT_GALLERY' ? (
          <GalleryDetail postSeq={postSeq} />
        ) : (
          <PostDetail postSeq={postSeq} />
        ))}
    </DetailPageWrapper>
  );
}

const DetailPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
