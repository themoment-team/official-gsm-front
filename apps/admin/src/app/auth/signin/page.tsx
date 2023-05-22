"use client";

import styled from "@emotion/styled";
import { AuthError, AuthTitle, Input } from "components";
import Link from "next/link";
import { useState } from "react";
import { Button } from "ui";

export default function SigninPage() {
  const [isSigninLoading, setIsSigninLoading] = useState<boolean>(false);

  return (
    <>
      <AuthTitle marginTopREM={1.5} textAlign="center" fontSizeREM={1.75}>
        교사 로그인
      </AuthTitle>
      <Form>
        <InputBox>
          <Input placeholder="아이디를 입력해주세요." type="text" />
          <Input type="password" placeholder="비밀번호를 입력해주세요." />
        </InputBox>
        <AuthError>아이디 혹은 비밀번호를 다시 확인해주세요.</AuthError>
        <ButtonBox>
          <Button
            onClick={() => {
              setIsSigninLoading(true);
            }}
            isLoading={isSigninLoading}
            type="submit"
          >
            로그인
          </Button>
          <Button bgColor="#DEE449" hoverBgColor="#E9EC9E" fontColor="#050505">
            <CustomLink href="/auth/signup">회원가입</CustomLink>
          </Button>
        </ButtonBox>
      </Form>
    </>
  );
}

const Form = styled.form`
  margin-top: 3rem;
`;

const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ButtonBox = styled.div`
  position: absolute;
  bottom: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const CustomLink = styled(Link)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
