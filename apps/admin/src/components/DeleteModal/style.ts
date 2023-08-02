import styled from '@emotion/styled';

export const ModalWrapper = styled.div`
  width: 18.125rem;
  height: 11.9375rem;
  background: ${({ theme }) => theme.color.white};
  padding: 1.5rem 3.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const DeletePostText = styled.h5`
  ${({ theme }) => theme.typo.h5};
  color: ${({ theme }) => theme.color.black};
  font-weight: 700;
`;

export const ReQuestionText = styled.p`
  ${({ theme }) => theme.typo.body2};
  color: ${({ theme }) => theme.color.gray['060']};
  margin-top: 0.5rem;
`;

export const ButtonForm = styled.form`
  display: flex;
  gap: 0.5rem;
  margin-top: 3.5rem;
`;

export const Button = styled.button`
  ${({ theme }) => theme.typo.body2};
  font-weight: 600;
  display: flex;
  width: 5.3125rem;
  height: 2rem;
  justify-content: center;
  align-items: center;
  border-radius: 1.25rem;
  cursor: pointer;
`;

export const CancleButton = styled(Button)`
  background: ${({ theme }) => theme.color.gray['040']};
  color: ${({ theme }) => theme.color.gray['080']};
`;

export const DeleteButton = styled(Button)`
  background: #f93535;
  color: #fcfcfc;
`;
