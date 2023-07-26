import { PAGE_SIZE } from 'client/components/ListPageContent';

import type { ContentType } from 'types';

import ListPagePostCard from './PostCard';

interface ListPagePostListProps {
  postList: ContentType[];
  totalElements: number;
  pageNumber: number;
}

const ListPagePostList: React.FC<ListPagePostListProps> = ({
  postList,
  totalElements,
  pageNumber,
}) => {
  /** 해당 카테고리의 전체 게시글 수 - (이전 페이지들의 게시글 수 + 현재 페이지 내의 게시글의 index) */
  const postIndex = (index: number) =>
    totalElements - (PAGE_SIZE * (pageNumber - 1) + index);

  return (
    <>
      {postList.map((post, index) => (
        <ListPagePostCard
          key={post.postSeq}
          postIndex={postIndex(index)}
          post={post}
        />
      ))}
    </>
  );
};

export default ListPagePostList;
