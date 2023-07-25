import { redirect } from 'next/navigation';

import { useGetPostList } from 'api/client';

import { categoryQueryString } from 'common';

import { PaginationController } from 'ui';

import type { CategoryType } from 'types';

import ListPagePostCard from './PostCard';

interface ListPagePostListProps {
  category: CategoryType;
  pageNumber: number;
}

const PAGE_SIZE = 11;

const ListPagePostList: React.FC<ListPagePostListProps> = ({
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

  /** 해당 카테고리의 전체 게시글 수 - (이전 페이지들의 게시글 수 + 현재 페이지 내의 게시글의 index) */
  const postIndex = (index: number) =>
    (data?.totalElements ?? 0) - (PAGE_SIZE * (pageNumber - 1) + index);

  return (
    <>
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
    </>
  );
};

export default ListPagePostList;
