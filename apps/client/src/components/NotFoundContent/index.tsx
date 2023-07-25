'use client';

import { useRouter } from 'next/navigation';

import { NotFoundTitle, ArrowIcon } from 'client/assets';

import * as S from './style';

const NotFoundContent = () => {
  const { back } = useRouter();

  const handleClick = () => {
    back();
  };

  return (
    <S.NotFoundWrapper>
      <S.ContentWrapper>
        <NotFoundTitle />
        <S.ReturnTextBox onClick={handleClick}>
          <S.ReturnText>이전 페이지로 돌아가기</S.ReturnText>
          <ArrowIcon />
        </S.ReturnTextBox>
      </S.ContentWrapper>
    </S.NotFoundWrapper>
  );
};

export default NotFoundContent;
