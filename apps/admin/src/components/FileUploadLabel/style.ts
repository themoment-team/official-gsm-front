import styled from '@emotion/styled';

export const Label = styled.label`
  width: fit-content;
  height: 2.25rem;
  padding: 0.5rem 0.75rem 0.5rem 1.125rem;
  display: flex;
  align-items: center;
  gap: 0.375rem;
  background: #050505;
  border-radius: 1.25rem;
  cursor: pointer;
`;

export const Text = styled.p`
  ${({ theme }) => theme.typo.body2};
  font-weight: 600;
  color: ${({ theme }) => theme.color.gray['010']};
`;
