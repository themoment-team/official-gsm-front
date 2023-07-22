'use client';

import styled from '@emotion/styled';

import { GalleryCard } from 'client/components';

import { useGetPostList } from 'api/client';

import { categoryQueryString } from 'common';

import type { CategoryType } from 'types';

const PAGE_SIZE = 12;

interface ListPageContentProps {
  category: CategoryType;
  searchParams: { pageNumber: string };
}

const GalleryList: React.FC<ListPageContentProps> = ({
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

  return (
    <List>
      {data?.postList?.map((post) => (
        <GalleryCard key={post.postSeq} post={post} />
      ))}
    </List>
  );
};

export default GalleryList;

export const List = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 2rem 1.5rem;

  @media ${({ theme }) => theme.breakPoint['1440']} {
    width: calc(100vw - 12.5rem);
    justify-content: space-between;
  }

  @media ${({ theme }) => theme.breakPoint['1024']} {
    width: calc(100vw - 7.5rem);
  }
`;
