'use client';

import { redirect } from 'next/navigation';

import styled from '@emotion/styled';

import { GalleryDetail, PostDetail, Header } from 'admin/components';

import { useGetPostDetail } from 'api/client';

interface DetailPageProps {
  params: { postSeq: number };
}

export default function DetailPage({ params: { postSeq } }: DetailPageProps) {
  const { data, isError } = useGetPostDetail(postSeq);

  if (isError) {
    redirect('/');
  }

  return (
    <DetailPageWrapper>
      <Header />
      {data?.category === 'EVENT_GALLERY' ? (
        <GalleryDetail postSeq={postSeq} />
      ) : (
        <PostDetail postSeq={postSeq} />
      )}
    </DetailPageWrapper>
  );
}

const DetailPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5rem;
`;
