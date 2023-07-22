import { GalleryCard } from 'client/components';

import { useGetPostList } from 'api/client';

import { categoryQueryString } from 'common';

import type { CategoryType } from 'types';

import * as S from './style';

const PAGE_SIZE = 11;

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
    <S.GalleryList>
      {data?.postList?.map((post) => (
        <GalleryCard key={post.postSeq} post={post} />
      ))}
    </S.GalleryList>
  );
};

export default GalleryList;
