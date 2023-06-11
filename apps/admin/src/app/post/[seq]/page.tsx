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

  const { data } = useGetPostDetail(Number(seq));

  return (
    <DetailPageWrapper>
      <Header hasNotification={false} name={'정문정'} />
      {data?.category === 'EVENT_GALLERY' ? (
        <GalleryDetail data={data} />
      ) : (
        <PostDetail data={data} />
      )}
    </DetailPageWrapper>
  );
}

const DetailPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
