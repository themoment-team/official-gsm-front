'use client';

import { NotFoundTitle, ArrowIcon } from 'client/assets';

import * as S from './style';

const NotFoundContent = () => (
  <S.NotFoundWrapper>
    <NotFoundTitle />
    <S.ReturnTextBox>
      <S.ReturnText>이전 페이지로 돌아가기</S.ReturnText>
      <ArrowIcon />
    </S.ReturnTextBox>
  </S.NotFoundWrapper>
);

export default NotFoundContent;
