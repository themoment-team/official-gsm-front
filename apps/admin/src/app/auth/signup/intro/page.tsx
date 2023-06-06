'use client';

import { useState } from 'react';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

import styled from '@emotion/styled';

import { AuthTitle, AuthModel, ToBackButton } from 'components';

import { Button } from 'ui';

export default function IntroPage() {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { back } = useRouter();

  return (
    <>
      <ToBackButton onClick={back} />
      <AuthTitle textAlign='center'>
        교사 회원 가입을 위해 이름과
        <br />
        아이디 비밀번호를 입력해야 돼요.
      </AuthTitle>
      <AuthModel modelUrl='/models/school.webm' />
      <Button
        position='absolute'
        bottom='1.5rem'
        onClick={() => {
          setIsLoading(true);
        }}
        isLoading={isLoading}
      >
        <CustomLink href='/auth/signup'>작성</CustomLink>
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
