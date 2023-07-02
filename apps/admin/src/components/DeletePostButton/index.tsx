import { TrashIcon } from 'admin/assets';

import * as S from './style';

const DeletePostButton = () => (
  <S.PostDeleteButton>
    <TrashIcon />
    <S.DeleteText>삭제하기</S.DeleteText>
  </S.PostDeleteButton>
);

export default DeletePostButton;
