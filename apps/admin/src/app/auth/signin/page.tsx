'use client';

import { GoogleIcon } from 'admin/assets';
import * as S from 'admin/styles/page/signin';

export default function SignInPage() {
  return (
    <S.SignInPage>
      <S.ModelWrapper>
        <S.SignInModel modelUrl='/models/school.webm' />
        <S.ModelCover />
      </S.ModelWrapper>
      <S.SignInContent>
        <S.Description>
          GSM 홈페이지 <S.LimeHighlight>관리자용 페이지</S.LimeHighlight>
          입니다.
          <br />
          이용하시려면{' '}
          <S.SkyBlueHighlight>학교 전용 구글 아이디</S.SkyBlueHighlight>로
          로그인해주세요.
        </S.Description>
        <S.GoogleOAuthLink href='https://www.google.com'>
          <GoogleIcon />
          Google 로그인
        </S.GoogleOAuthLink>
      </S.SignInContent>
    </S.SignInPage>
  );
}
