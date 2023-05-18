"use client";

import styled from "@emotion/styled";
import { AuthTitle, AuthModel, ToBackButton } from "components";
import { useRouter } from "next/navigation";
import { Button } from "ui";

const titleArray = [
  "관리자에게 요청을 보냈어요.",
  "요청이 승인될 때 까지 기다려주세요.",
];

// TODO : react-query refetchInterval 사용하여 pending 상태 확인

export default function IntroPage() {
  const { replace } = useRouter();

  return (
    <PageWrapper>
      <ToBackButton onClick={() => replace("/auth/signin")} />
      <AuthTitle titleArray={titleArray} textAlign="center" />
      <AuthModel modelUrl="/models/school.webm" />
      <Button position="absolute" bottomREM={0} disabled={true}>
        대기중
      </Button>
    </PageWrapper>
  );
}

const PageWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;
