'use client';

import { redirect } from 'next/navigation';

import styled from '@emotion/styled';

import { GalleryDetail, PostDetail, Header } from 'admin/components';

import { useGetPostDetail } from 'api/client';
import { minutesToMs } from 'common';

interface DetailPageProps {
  params: { seq: string };
}

export default function DetailPage({ params: { seq } }: DetailPageProps) {
  const postSeq = Number(seq);

  const { data, isError } = useGetPostDetail(postSeq, {
    cacheTime: minutesToMs(30),
    staleTime: minutesToMs(3),
  });

  if (isError) {
    redirect('/');
  }

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
