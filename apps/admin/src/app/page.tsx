'use client';

import { useRouter, useSearchParams } from 'next/navigation';

import styled from '@emotion/styled';

import {
  Category,
  Header,
  Banner,
  PostListHeader,
  PostList,
  PaginationController,
} from 'admin/components';

import { useGetPostList } from 'api/client';

export default function Home() {
  const { replace } = useRouter();
  const searchParams = useSearchParams();

  const pageNumber = Number(searchParams.get('pageNumber') ?? '1');

  const { data } = useGetPostList('NOTICE', pageNumber - 1);

  if (Number.isNaN(pageNumber) || pageNumber < 1) {
    replace('/');
  }

  return (
    <>
      <Header />
      <Banner />
      <ContentWrapper>
        <Category category='notice' />
        <PostListHeader category='notice' marginTop='3rem' />
        <PostList postList={data?.postList ?? []} />
        {(data?.totalPages ?? 0) > 1 && (
          <PaginationController
            pageNumber={pageNumber}
            totalPages={data?.totalPages ?? 0}
          />
        )}
      </ContentWrapper>
    </>
  );
}

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 2.5rem;
  padding-bottom: 5rem;
`;
