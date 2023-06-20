import { ChevronIcon } from 'client/assets';
import { NewsTitle } from 'client/components';

import * as S from './style';

interface CategoryHeaderProps {
  category: 'FAMILY_NEWSLETTER' | 'EVENT_GALLERY';
}

const categories = {
  FAMILY_NEWSLETTER: '가정통신문',
  EVENT_GALLERY: '우리 학교 갤러리',
} as const;

const CategoryHeader: React.FC<CategoryHeaderProps> = ({ category }) => (
  <S.CategoryHeaderWrapper>
    <NewsTitle pointColor='lime'>{categories[category]}</NewsTitle>
    <S.SeeMoreWrapper>
      <S.SeeMoreText>더보기</S.SeeMoreText>
      <S.ChevronIconWrapper>
        <ChevronIcon />
      </S.ChevronIconWrapper>
    </S.SeeMoreWrapper>
  </S.CategoryHeaderWrapper>
);

export default CategoryHeader;
