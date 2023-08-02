'use client';

import { useRouter } from 'next/navigation';


import { AuthTitle, AuthModel, AuthDescription } from 'admin/components';

import { useGetUserInfo } from 'api/admin';

import { secondsToMs } from 'common';

import { Button } from 'ui';

export default function PendingPage() {
  const { replace } = useRouter();
  const { data } = useGetUserInfo({ refetchInterval: secondsToMs(5) });

  if (data?.role === 'ADMIN') {
    replace('/auth/signup/approve');
  }

  return (
    <>
      <AuthTitle textAlign='center' marginTop='4rem'>
        관리자에게 요청을 보냈어요.
        <br />
        요청이 승인될 때 까지 기다려주세요.
      </AuthTitle>
      <AuthDescription>상황에 따라 시간이 걸릴 수 있어요.</AuthDescription>
      <AuthModel modelUrl='/models/pending.webm' marginTop='2.5rem' />
      <Button position='absolute' bottom='1.5rem' disabled={true}>
        대기중
      </Button>
    </>
  );
}
