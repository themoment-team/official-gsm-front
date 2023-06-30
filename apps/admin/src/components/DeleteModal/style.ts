import styled from '@emotion/styled';

export const ModalWrapper = styled.div`
  width: 290px;
  height: 191px;
  background: #fff;
  padding: 24px 56px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const DeletePostText = styled.h5`
  color: #000;
  font-weight: 700;
  font-size: 18px;
  line-height: 27px;
`;

export const ReQuestionText = styled.p`
  color: #9e9e9e;
  font-size: 14px;
  line-height: 20px;
  margin-top: 8px;
`;

export const ButtonForm = styled.form`
  display: flex;
  gap: 8px;
  margin-top: 56px;
`;

export const Button = styled.button`
  display: flex;
  width: 85px;
  height: 32px;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  cursor: pointer;
  font-size: 14px;
  line-height: 20px;
  font-weight: 600;
`;

export const CancleButton = styled(Button)`
  background: #eee;
  color: #424242;
`;

export const DeleteButton = styled(Button)`
  background: #f93535;
  color: #fcfcfc;
`;
