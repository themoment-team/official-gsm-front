import React from "react";
import PostListHeader from "../PostListHeader";
import PostCard from "../PostCard";
import { useState } from "react";

interface PostListHeader {
  kind: string;
  seeMore: boolean;
  isAdmin: boolean;
}

interface PostType {
  postSeq: number;
  postTitle: string;
  postWriter: string;
  createdAt: string;
  thumbnailUrl: string;
  fileIsExist: boolean;
}

const PostList: React.FC<PostListHeader> = ({ kind, seeMore, isAdmin }) => {
  const [postList, setPostList] = useState<PostType[]>();

  return (
    <>
      <PostListHeader kind={kind} seeMore={seeMore} isAdmin={isAdmin} />
      {postList?.map((post) => {
        const subTitle = "postSeq => postContent 요청하기";
        <PostCard
          title={post.postTitle}
          subtitle={subTitle}
          writer={post.postWriter}
          createdAt={post.createdAt}
        />;
      })}
    </>
  );
};

export default PostList;
