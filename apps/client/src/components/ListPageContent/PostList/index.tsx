import { useGetPostList } from 'api/client';

import { categoryQueryString } from 'common';

import { PaginationController } from 'ui';

import type { CategoryType } from 'types';

import ListPagePostCard from './PostCard';

interface PostListProps {
  category: CategoryType;
  pageNumber: number;
}

const PAGE_SIZE = 11;

const ListPagePostList: React.FC<PostListProps> = ({
  category,
  pageNumber,
}) => {
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
