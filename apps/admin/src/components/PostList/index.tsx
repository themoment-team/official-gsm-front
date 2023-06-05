import React from 'react';

import styled from '@emotion/styled';

import { PostCard } from 'admin/components';
import type { ContentType } from 'api/client';

interface GalleryListProps {
  postList: ContentType[];
}

const PostList: React.FC<GalleryListProps> = ({ postList }) => (
  <PostListWrapper>
    {postList?.map((post) => {
      const subTitle = 'postSeq => postContent 요청하기';
      return (
        <PostCard
          key={post.postSeq}
          title={post.postTitle}
          subtitle={subTitle}
          writer={post.postWriter}
          createdAt={post.createdAt}
        />
      );
    })}
  </PostListWrapper>
);

const PostListWrapper = styled.div`
  margin-top: 1.1875rem;
`;

export default PostList;
