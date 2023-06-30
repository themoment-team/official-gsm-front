import styled from '@emotion/styled';

export const ModalWrapper = styled.div`
  width: 18.125rem;
  height: 11.9375rem;
  background: #fff;
  padding: 1.5rem 3.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const DeletePostText = styled.h5`
  color: #000;
  font-weight: 700;
  font-size: 1.125rem;
  line-height: 1.6875rem;
`;

export const ReQuestionText = styled.p`
  color: #9e9e9e;
  font-size: 0.875rem;
  line-height: 1.25rem;
  margin-top: 0.5rem;
`;

export const ButtonForm = styled.form`
  display: flex;
  gap: 0.5rem;
  margin-top: 3.5rem;
`;

export const Button = styled.button`
  display: flex;
  width: 5.3125rem;
  height: 2rem;
  justify-content: center;
  align-items: center;
  border-radius: 1.25rem;
  cursor: pointer;
  font-size: 0.875rem;
  line-height: 1.25rem;
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
