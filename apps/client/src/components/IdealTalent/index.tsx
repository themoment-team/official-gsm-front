import * as S from './style';
import type { IdealTalentType } from 'client/types/idealtalent';
import { css } from '@emotion/react';
const IdealTalent: React.FC<IdealTalentType> = ({ icon, title, subTitle }) => (
  <S.IdealTalent>
    <S.Title>{title}</S.Title>
    <S.Line />
    <S.SubTitleWrap>
      {subTitle.map((index) => (
        <S.SubTitle key={index}>{index}</S.SubTitle>
      ))}
    </S.SubTitleWrap>
  </S.IdealTalent>
);

export default IdealTalent;
