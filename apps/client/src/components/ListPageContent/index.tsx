'use client';

import styled from '@emotion/styled';

import { categoryQueryString } from 'common';

import type { CategoryType } from 'types';

import ListPageCategory from './Category';
import GalleryList from './GalleryList';
import ListPagePostList from './PostList';
import ListPageTitle from './Title';

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

  return (
    <Content>
      <ListPageCategory categoryParam={category} />
      <ListPageTitle category={category} />
      {categoryQueryString[category] === 'EVENT_GALLERY' ? (
        <GalleryList category={category} pageNumber={pageNumber} />
      ) : (
        <ListPagePostList category={category} pageNumber={pageNumber} />
      )}
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
