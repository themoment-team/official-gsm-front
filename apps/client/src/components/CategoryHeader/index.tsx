import { ChevronIcon } from 'client/assets';

import * as S from './style';

const CategoryHeader = () => (
  <S.CategoryHeaderWrapper>
    <>Title/News가 들어갈 자리</>
    <S.SeeMoreWrapper>
      <S.SeeMoreText>더보기</S.SeeMoreText>
      <S.ChevronIconWrapper>
        <ChevronIcon />
      </S.ChevronIconWrapper>
    </S.SeeMoreWrapper>
  </S.CategoryHeaderWrapper>
);

export default CategoryHeader;
