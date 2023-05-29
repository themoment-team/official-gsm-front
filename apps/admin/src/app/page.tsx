"use client";

import { Header } from "components";
import { useGetPostDetail, useGetPostList } from "api/client";

export default function Home() {
  // example
  const { data: postList, isLoading } = useGetPostList(0, "NOTICE");

  const { data: postDetail } = useGetPostDetail(1);

  console.log(postList);
  console.log(postDetail);

  return (
    <div>
      <Header hasNotification={false} name={"정문정"} />
    </div>
  );
}
