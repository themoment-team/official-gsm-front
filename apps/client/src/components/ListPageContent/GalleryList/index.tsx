import { redirect } from 'next/navigation';

import styled from '@emotion/styled';

import { GalleryCard } from 'client/components';

import { useGetPostList } from 'api/client';

import { categoryQueryString } from 'common';

import { PaginationController } from 'ui';

import type { CategoryType } from 'types';

const PAGE_SIZE = 12;

interface ListPageGalleryListProps {
  category: CategoryType;
  pageNumber: number;
}

const ListPageGalleryList: React.FC<ListPageGalleryListProps> = ({
  category,
  pageNumber,
}) => {
  const { data, isError } = useGetPostList(
    categoryQueryString[category],
    pageNumber,
    PAGE_SIZE
  );

  if (isError) {
    redirect(`/list/${category}`);
  }

  return (
    <>
      <List>
        {data?.postList.map((post) => (
          <GalleryCard key={post.postSeq} post={post} />
        ))}
      </List>
      <PaginationController
        pageNumber={pageNumber}
        totalPages={data?.totalPages ?? 0}
      />
    </>
  );
};

export default ListPageGalleryList;

export const List = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem 1.5rem;

  @media ${({ theme }) => theme.breakPoint['1024']} {
    grid-template-columns: repeat(3, 1fr);
  }

  @media ${({ theme }) => theme.breakPoint['600']} {
    grid-template-columns: repeat(2, 1fr);
  }
`;
