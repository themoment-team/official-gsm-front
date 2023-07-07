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

  /** 해당 카테고리의 전체 게시글 수 - (이전 페이지들의 게시글 수 + 현재 페이지 내의 게시글의 index) */
  const postIndex = (index: number) =>
    (data?.totalElements ?? 0) - (PAGE_SIZE * (pageNumber - 1) + index);

  return (
    <>
      <Header segment={'list'} />
      <Content>
        <ListPageCategory categoryParam={category} />
        <ListPageTitle category={category} />
        {data?.postList?.map((post, index) => (
          <ListPagePostCard
            key={post.postSeq}
            postIndex={postIndex(index)}
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

  @media ${({ theme }) => theme.breakPoint['1440']} {
    width: 56.5rem;
  }

  @media ${({ theme }) => theme.breakPoint['600']} {
    width: 30rem;
  }
`;
