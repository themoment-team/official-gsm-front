import React from "react";
import PostListHeader from "../PostListHeader";

interface PostListHeader {
  kind: string;
  seeMore: boolean;
  isAdmin: boolean;
}

const PostList: React.FC<PostListHeader> = ({ kind, seeMore, isAdmin }) => {
  return (
    <>
      <PostListHeader kind={kind} seeMore={seeMore} isAdmin={isAdmin} />
    </>
  );
};

export default PostList;
