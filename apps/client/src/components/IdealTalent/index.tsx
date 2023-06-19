
import type { IdealTalentType } from 'client/types/idealtalent';

import * as S from './style';
const IdealTalent: React.FC<IdealTalentType> = ({  title, subTitle }) => (
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
