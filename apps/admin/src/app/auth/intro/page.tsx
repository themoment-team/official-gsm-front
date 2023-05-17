"use client";

import { AuthTitle, ToBackButton } from "components";

const titleArray = ["안녕", "하세요."];

export default function IntroPage() {
  return (
    <>
      <ToBackButton />
      <AuthTitle titleArray={titleArray} />
    </>
  );
}
