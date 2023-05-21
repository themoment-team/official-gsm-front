"use client";

import { DetailPageHeader, PostContent } from "components";

export default function DetailPage() {
  return (
    <div>
      <DetailPageHeader />
      <PostContent
        postSeq={1}
        postTitle={"제목"}
        postWriter={"최장우"}
        createdAt={"2023-05-02T23:18:37.782298"}
        fileIsExist={true}
      />
    </div>
  );
}
