import * as S from './style';
import type { IdealTalentType } from 'client/types/idealtalent';
import { css } from '@emotion/react';
const IdealTalent: React.FC<IdealTalentType> = ({ icon, title, subTitle }) => (
  <S.IdealTalent>
    <S.Title>{title}</S.Title>
    <S.Line />
    <ul
      css={css`
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        width: 381px;
        height: 62px;
      `}
    >
      {subTitle.map((index) => (
        <S.SubTitle key={index}>{index}</S.SubTitle>
      ))}
    </ul>
  </S.IdealTalent>
);

export default IdealTalent;
