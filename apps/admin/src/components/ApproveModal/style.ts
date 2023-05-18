import styled from "@emotion/styled";

export const ModalConatiner = styled.div`
  position: absolute;
  width: 20.625rem;
  height: 16.875rem;
  left: 14.813rem;
  top: 6.5rem;
  background-color: #fdfdfd;
  box-shadow: 0px 0.25rem 1.875rem rgba(0, 0, 0, 0.11);
  border-radius: 1.25rem;
  padding: 1.625rem 1.375rem 2.625rem 1rem;
  overflow: scroll;
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
