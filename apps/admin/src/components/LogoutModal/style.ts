import styled from '@emotion/styled';

export const ModalContainer = styled.div`
  position: absolute;
  display: flex;
  width: 8.4375rem;
  padding: 1.25rem 0rem 0.875rem 0rem;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: 1rem;
  background: var(--gray-010, #fcfcfc);
  background-color: red;
  left: -100%;
  transform: translateX(-50%);

  border-radius: 20px;
  box-shadow: 0px 0px 30px 0px rgba(0, 0, 0, 0.11);
`;
