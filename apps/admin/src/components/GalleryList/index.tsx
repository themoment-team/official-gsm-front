import React from "react";
import { GalleryCard } from "../../components";

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

const GalleryList: React.FC<GalleryListProps> = ({ postList }) => {
  return (
    <div style={{ marginTop: "1.1875rem" }}>
      {postList?.map((post) => {
        const subTitle = "postSeq => postContent 요청하기";
        const fileInfo = [
          {
            fileUrl: "postSeq => fileInfo 요청하기",
            fileName: "postSeq => fileInfo 요청하기",
          },
        ];
        return (
          <GalleryCard
            key={post.postSeq}
            fileInfo={fileInfo}
            title={post.postTitle}
            description={subTitle}
            writer={post.postWriter}
            createdAt={post.createdAt}
          />
        );
      })}
    </div>
  );
};

export default GalleryList;
