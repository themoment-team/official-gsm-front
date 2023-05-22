"use client";

import { AuthTitle, ToBackButton, Input } from "components";
import { useRouter } from "next/navigation";
import { Button } from "ui";

export default function SignupPage() {
  const { replace } = useRouter();

  return (
    <>
      <ToBackButton onClick={() => replace("/auth/signin")} />
      <AuthTitle>
        저희 학교 선생님인지
        <br />
        확인하기 위해 성함을 입력해주세요.
      </AuthTitle>
      <Input placeholder="성함을 입력해주세요." />
      <Button position="absolute" bottom="1.5rem">
        다음
      </Button>
    </>
  );
}
