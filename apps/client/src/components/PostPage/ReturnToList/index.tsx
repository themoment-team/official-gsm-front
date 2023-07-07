import { ReturnChevronIcon } from 'client/assets';

import * as S from './style';

interface ReturnToListProps {
  category: 'NOTICE' | 'FAMILY_NEWSLETTER' | 'EVENT_GALLERY';
}

const categories = {
  NOTICE: 'notice',
  FAMILY_NEWSLETTER: 'newsletter',
  EVENT_GALLERY: 'gallery',
};

const ReturnToList: React.FC<ReturnToListProps> = ({ category }) => (
  <S.ReturnToListWrapper href={`/list/${categories[category]}`}>
    <ReturnChevronIcon />
    <S.ReturnText>목록으로 돌아가기</S.ReturnText>
  </S.ReturnToListWrapper>
);

export default ReturnToList;
