"use client";

import styled from "@emotion/styled";
import { AuthTitle, AuthModel, ToBackButton } from "components";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "ui";

const titleArray = [
  "교사 회원 가입을 위해 이름과",
  "아이디 비밀번호를 입력해야 돼요.",
];

export default function IntroPage() {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { back } = useRouter();

  return (
    <PageWrapper>
      <ToBackButton onClick={back} />
      <AuthTitle titleArray={titleArray} textAlign="center" />
      <AuthModel modelUrl="/models/school.WebM" />
      <Button
        position="absolute"
        bottomREM={0}
        onClick={() => {
          setIsLoading(true);
        }}
        isLoading={isLoading}
      >
        <CustomLink href="/auth/signup">작성</CustomLink>
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
