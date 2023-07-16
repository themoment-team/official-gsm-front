import styled from '@emotion/styled';

export const NotFoundWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.2531rem;
  align-items: center;
`;

export const ReturnTextBox = styled.div`
  display: flex;
  align-items: center;
`;

export const ReturnText = styled.h4`
  ${({ theme }) => theme.typo.h4}
  font-weight: 800;
  color: #549ecc;
`;
