import * as S from './style';

interface DeleteModalProps {
  onClick: () => void;
}

const DeleteModal: React.FC<DeleteModalProps> = ({ onClick }) => (
  <S.ModalWrapper>
    <S.DeletePostText>게시물 삭제</S.DeletePostText>
    <S.ReQuestionText>정말 게시물을 삭제하실건가요?</S.ReQuestionText>
    <S.ButtonForm method='dialog'>
      <S.CancelButton>취소하기</S.CancelButton>
      <S.DeleteButton onClick={onClick}>삭제하기</S.DeleteButton>
    </S.ButtonForm>
  </S.ModalWrapper>
);

export default DeleteModal;
