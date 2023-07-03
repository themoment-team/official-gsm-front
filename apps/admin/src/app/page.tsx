'use client';

import { useRouter } from 'next/navigation';

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

interface HomeProps {
  searchParams: {
    pageNumber: string;
  };
}

export default function Home({ searchParams }: HomeProps) {
  const { replace } = useRouter();

  /** 1 ~ totalPages */
  const pageNumber = Number(searchParams.pageNumber ?? 1);

  const { data } = useGetPostList('NOTICE', pageNumber);

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
