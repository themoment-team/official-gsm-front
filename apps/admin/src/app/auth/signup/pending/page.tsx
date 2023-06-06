'use client';

import { AuthTitle, AuthModel, AuthDescription } from 'components';

import { Button } from 'ui';

// TODO : react-query refetchInterval 사용하여 지속적으로 pending 여부 확인

export default function PendingPage() {
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
