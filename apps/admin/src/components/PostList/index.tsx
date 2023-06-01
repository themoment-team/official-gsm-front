import React from "react";
import { PostCard } from "../../components";
import { useState } from "react";

interface PostType {
  postSeq: number;
  postTitle: string;
  postWriter: string;
  createdAt: string;
  thumbnailUrl: string | null;
  fileIsExist: boolean;
}

interface GalleryListProps {
  postList: PostType[];
}

interface PostType {
  postSeq: number;
  postTitle: string;
  postWriter: string;
  createdAt: string;
  thumbnailUrl: string | null;
  fileIsExist: boolean;
}

const PostList: React.FC<GalleryListProps> = ({ postList }) => {
  return (
    <div style={{ marginTop: "1.1875rem" }}>
      {postList?.map((post: PostType) => {
        const subTitle = "postSeq => postContent 요청하기";
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
    </div>
  );
};

export default PostList;
