'use client';

import { WarningIcon } from 'admin/assets';
import { GoogleLoginButton } from 'admin/components';
import * as S from 'admin/styles/page/signin';

export default function SignInWarningPage() {
  return (
    <S.SignInWarning>
      <WarningIcon />
      <S.WarningContent>
        <S.Description>학교 이메일로만 로그인 가능합니다.</S.Description>
        <GoogleLoginButton>다시 로그인</GoogleLoginButton>
      </S.WarningContent>
    </S.SignInWarning>
  );
}
