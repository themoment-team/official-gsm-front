'use client';

import { GoogleIcon, WarningIcon } from 'admin/assets';
import * as S from 'admin/styles/page/signin';

import { css } from '@emotion/react';

export default function SignInWarningPage() {
  return (
    <S.SignInPage
      css={css`
        padding-top: 109px;
      `}
    >
      <S.ModelWrapper>
        <WarningIcon />
      </S.ModelWrapper>
      <S.SignInContent
        css={css`
          height: 109px;
        `}
      >
        <S.Description>
          학교에서 배정 받은 이메일만 로그인 가능합니다.
        </S.Description>
        <S.GoogleOAuthLink href='/api/signin'>
          <GoogleIcon />
          다시 로그인
        </S.GoogleOAuthLink>
      </S.SignInContent>
    </S.SignInPage>
  );
}
