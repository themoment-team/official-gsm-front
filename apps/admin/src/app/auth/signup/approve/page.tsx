'use client';

import { useState } from 'react';

import Link from 'next/link';

import styled from '@emotion/styled';

import { AuthTitle, AuthModel } from 'admin/components';

import { Button } from 'ui';

export default function IntroPage() {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  return (
    <>
      <AuthTitle textAlign='center' marginTop='6.5rem'>
        승인이 완료되었습니다.
      </AuthTitle>
      <AuthModel modelUrl='/models/approve.webm' loop={false} marginTop='0' />
      <Button
        position='absolute'
        bottom='1.5rem'
        onClick={() => {
          setIsLoading(true);
        }}
        isLoading={isLoading}
      >
        <CustomLink href='/'>확인</CustomLink>
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
