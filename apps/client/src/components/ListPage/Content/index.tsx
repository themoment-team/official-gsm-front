'use client';

import styled from '@emotion/styled';

import {
  ListPageCategory,
  ListPagePostCard,
  ListPageTitle,
} from 'client/components';

import { useGetPostList } from 'api/client';

import { categoryQueryString } from 'common';

import { PaginationController } from 'ui';

import type { CategoryType } from 'types';

const PAGE_SIZE = 11;

interface ListPageContentProps {
  category: CategoryType;
  searchParams: { pageNumber: string };
}

const ListPageContent: React.FC<ListPageContentProps> = ({
  category,
  searchParams,
}) => {
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
  );
};

export default ListPageContent;

const Content = styled.div`
  width: 77.5rem;
  margin: 0 auto;
  padding: 5rem 0 7.5rem;

  @media ${({ theme }) => theme.breakPoint['1440']} {
    width: calc(100vw - 7.5rem);
  }
`;
