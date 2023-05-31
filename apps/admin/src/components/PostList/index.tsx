import React from "react";
import { PostListHeader, PostCard, GalleryList } from "../../components";
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
  thumbnailUrl: string | null;
  fileIsExist: boolean;
}

const PostList: React.FC<PostListHeader> = ({ kind, seeMore, isAdmin }) => {
  const [postList, setPostList] = useState<PostType[]>([
    {
      postSeq: 1,
      postTitle: "Test",
      postWriter: "Tester",
      createdAt: "2023-05-03T19:47:01.250197",
      thumbnailUrl: null,
      fileIsExist: true,
    },
    {
      postSeq: 1,
      postTitle: "Test",
      postWriter: "Tester",
      createdAt: "2023-05-03T19:47:01.250197",
      thumbnailUrl: null,
      fileIsExist: true,
    },
    {
      postSeq: 1,
      postTitle: "Test",
      postWriter: "Tester",
      createdAt: "2023-05-03T19:47:01.250197",
      thumbnailUrl: null,
      fileIsExist: true,
    },
  ]);

  return (
    <>
      <PostListHeader kind={kind} seeMore={seeMore} isAdmin={isAdmin} />
      {kind === "👇지금 우리 학교는" ? (
        <GalleryList postList={postList} />
      ) : (
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
      )}
    </>
  );
};

export default PostList;
