'use client';

import styled from '@emotion/styled';

import {
  Footer,
  Header,
  ListPageCategory,
  ListPageTitle,
  ListPagePostCard,
} from 'client/components';

import { useGetPostList } from 'api/client';

import { categoryQueryString } from 'common';

import { PaginationController } from 'ui';

import type { CategoryType } from 'types';

interface ListPageProps {
  params: { category: CategoryType };
  searchParams: { pageNumber: string };
}

const PAGE_SIZE = 11;

export default function ListPage({
  params: { category },
  searchParams,
}: ListPageProps) {
  /** 1 ~ totalPages */
  const pageNumber = Number(searchParams.pageNumber ?? 1);

  const { data } = useGetPostList(
    categoryQueryString[category],
    pageNumber,
    PAGE_SIZE
  );

  return (
    <>
      <Header segment={'list'} />
      <Content>
        <ListPageCategory categoryParam={category} />
        <ListPageTitle category={category} />
        {data?.postList?.map((post, index) => (
          <ListPagePostCard
            key={post.postSeq}
            postIndex={
              data.totalPages * PAGE_SIZE -
              (index + 1 + PAGE_SIZE * (pageNumber - 1))
            }
            post={post}
          />
        ))}
        <PaginationController
          pageNumber={pageNumber}
          totalPages={data?.totalPages ?? 0}
        />
      </Content>
      <Footer />
    </>
  );
}

const Content = styled.div`
  width: 77.5rem;
  margin: 0 auto;
  padding: 5rem 0 7.5rem;
`;
