'use client';

import { css } from '@emotion/react';

import { WarningIcon } from 'admin/assets';
import { GoogleLoginButton } from 'admin/components';
import * as S from 'admin/styles/page/signin';

export default function SignInWarningPage() {
  return (
    <S.SignInPage
      css={css`
        padding-top: 6.8125rem;
      `}
    >
      <S.ModelWrapper>
        <WarningIcon />
      </S.ModelWrapper>
      <S.SignInContent
        css={css`
          height: 6.8125rem;
        `}
      >
        <S.Description>학교 이메일로만 로그인 가능합니다.</S.Description>
        <GoogleLoginButton>다시 로그인</GoogleLoginButton>
      </S.SignInContent>
    </S.SignInPage>
  );
}
