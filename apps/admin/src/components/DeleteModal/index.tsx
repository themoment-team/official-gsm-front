import * as S from './style';

const DeleteModal = () => {
  const onClick = () => {};

  return (
    <S.ModalWrapper>
      <S.DeletePostText>게시물 삭제</S.DeletePostText>
      <S.ReQuestionText>정말 게시물을 삭제하실건가요?</S.ReQuestionText>
      <S.ButtonBox>
        <S.CancleButton>취소하기</S.CancleButton>
        <S.DeleteButton>삭제하기</S.DeleteButton>
      </S.ButtonBox>
    </S.ModalWrapper>
  );
};

export default DeleteModal;
