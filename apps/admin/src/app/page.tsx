'use client';

import { useState } from 'react';

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
  const [pageNumber, setPageNumber] = useState<number>(0);

  const { data } = useGetPostList('NOTICE', pageNumber);

  return (
    <>
      <Header hasNotification={false} name={'정문정'} />
      <Banner />
      <ContentWrapper>
        <Category category='notice' />
        <PostListHeader category='notice' marginTop='3rem' />
        <PostList postList={data?.postList ?? []} />
        {(data?.totalPages ?? 0) > 1 && (
          <PaginationController
            pageNumber={pageNumber}
            setPageNumber={setPageNumber}
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
`;
