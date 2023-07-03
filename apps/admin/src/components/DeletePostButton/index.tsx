import { TrashIcon } from 'admin/assets';

import * as S from './style';

interface DeletePostButtonProps {
  onClick: () => void;
}

const DeletePostButton: React.FC<DeletePostButtonProps> = ({ onClick }) => (
  <S.PostDeleteButton onClick={onClick}>
    <TrashIcon />
    <S.DeleteText>삭제하기</S.DeleteText>
  </S.PostDeleteButton>
);

export default DeletePostButton;
