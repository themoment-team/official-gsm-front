import React from 'react';

import styled from '@emotion/styled';

import { PostCard } from 'admin/components';

import type { ContentType } from 'types';

interface GalleryListProps {
  postList: ContentType[];
}

const PostList: React.FC<GalleryListProps> = ({ postList }) => (
  <PostListWrapper>
    {postList?.map((post) => (
      <PostCard key={post.postSeq} post={post} />
    ))}
  </PostListWrapper>
);

const PostListWrapper = styled.div`
  margin-top: 1.1875rem;
  height: 26.25rem;
`;

export default PostList;
