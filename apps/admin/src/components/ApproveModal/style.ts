import styled from '@emotion/styled';

export const ModalConatiner = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 20.625rem;
  height: 16.875rem;
  top: 6.5rem;
  left: 50%;
  transform: translate(-50%, 0%);
  background-color: #fdfdfd;
  box-shadow: 0 0.25rem 1.875rem rgba(0, 0, 0, 0.11);
  border-radius: 1.25rem;
  padding: 1.625rem 1rem 0.5rem 1rem;
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: 600;
  font-size: 0.875rem;
  line-height: 1.25rem;
  color: #000000;
  margin-bottom: 1.125rem;

  svg {
    cursor: pointer;
  }
`;

export const ModalContent = styled.div`
  flex: 1;
  overflow: scroll;
`;
