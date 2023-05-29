import React from "react";
import PostListHeader from "../PostListHeader";
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
  createdAt: Date;
  thumbnailUrl: string;
  fileIsExist: boolean;
}

const PostList: React.FC<PostListHeader> = ({ kind, seeMore, isAdmin }) => {
  const [postList, setPostList] = useState<PostType[]>();

  return (
    <>
      <PostListHeader kind={kind} seeMore={seeMore} isAdmin={isAdmin} />
      {
        postList?.map(() => {
          s
        })
      }
    </>
  );
};

export default PostList;
