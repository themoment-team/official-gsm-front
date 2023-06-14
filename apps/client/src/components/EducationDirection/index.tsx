import type { EducationDirectionType } from 'client/types/introduce';

import * as S from './style';

const EducationDirection: React.FC<EducationDirectionType> = ({
  icon,
  title,
  subTitle,
}) => (
  <S.EducationDirectionStyle>
    {icon}
    <S.Title>{title}</S.Title>
    <ul>
      {subTitle.map((v) => (
        <S.SubTitle key={v}>{v}</S.SubTitle>
      ))}
    </ul>
  </S.EducationDirectionStyle>
);

export default EducationDirection;
