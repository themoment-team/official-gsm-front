import { ReturnChevronIcon } from 'client/assets';

import * as S from './style';

const ReturnToList = () => (
  <S.ReturnToListWrapper href='/'>
    <S.ChevronWrapper>
      <ReturnChevronIcon />
    </S.ChevronWrapper>
    <S.ReturnText>목록으로 돌아가기</S.ReturnText>
  </S.ReturnToListWrapper>
);

export default ReturnToList;
