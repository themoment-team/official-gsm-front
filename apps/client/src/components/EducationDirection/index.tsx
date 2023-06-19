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
      <S.SubTitle>{subTitle[0]}</S.SubTitle>
      <S.SubTitle>{subTitle[1]}</S.SubTitle>
    </ul>
  </S.EducationDirectionStyle>
);

export default EducationDirection;
