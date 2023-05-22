"use client";

import styled from "@emotion/styled";
import { AuthTitle } from "components";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "ui";

export default function SigninPage() {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { back } = useRouter();

  return (
    <>
      <AuthTitle marginTopREM={1.5} textAlign="center" fontSizeREM={1.75}>
        교사 로그인
      </AuthTitle>
      <Button
        position="absolute"
        bottomREM={1}
        onClick={() => {
          setIsLoading(true);
        }}
        isLoading={isLoading}
      >
        <CustomLink href="/auth/signup">작성</CustomLink>
      </Button>
    </>
  );
}

const CustomLink = styled(Link)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
