'use client';

import type { IdealTalentType } from 'client/types';

import * as S from './style';
const IdealTalent: React.FC<IdealTalentType> = ({ title, subTitle }) => (
  <S.IdealTalent>
    <S.Title>{title}</S.Title>
    <S.Line />
    <S.SubTitleWrap>
      <S.SubTitle>{subTitle[0]}</S.SubTitle>
      <S.SubTitle>{subTitle[1]}</S.SubTitle>
    </S.SubTitleWrap>
  </S.IdealTalent>
);

export default IdealTalent;
