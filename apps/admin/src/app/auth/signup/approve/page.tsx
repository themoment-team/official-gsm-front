"use client";

import styled from "@emotion/styled";
import { AuthTitle, AuthModel, ToBackButton } from "components";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "ui";

export default function IntroPage() {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { back } = useRouter();

  return (
    <PageWrapper>
      <ToBackButton onClick={back} />
      <AuthTitle textAlign="center" marginTopREM={5}>
        승인이 완료되었습니다.
      </AuthTitle>
      <AuthModel modelUrl="/models/approve.webm" marginTopREM={2.5} />
      <Button
        position="absolute"
        bottomREM={0}
        onClick={() => {
          setIsLoading(true);
        }}
        isLoading={isLoading}
      >
        <CustomLink href="/">확인</CustomLink>
      </Button>
    </PageWrapper>
  );
}

const PageWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const CustomLink = styled(Link)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
