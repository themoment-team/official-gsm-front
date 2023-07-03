import { css } from '@emotion/react';

import * as S from './style';

const DeleteModal = () => (
  <>
    <dialog
      css={css`
        border-radius: 0.625rem;
        border: 0;
        ::backdrop {
          background: rgba(5, 5, 5, 0.4);
        }
      `}
    >
      <S.ModalWrapper>
        <S.DeletePostText>게시물 삭제</S.DeletePostText>
        <S.ReQuestionText>정말 게시물을 삭제하실건가요?</S.ReQuestionText>
        <S.ButtonForm method='dialog'>
          <S.CancleButton>취소하기</S.CancleButton>
          <S.DeleteButton>삭제하기</S.DeleteButton>
        </S.ButtonForm>
      </S.ModalWrapper>
    </dialog>
  </>
);

export default DeleteModal;
