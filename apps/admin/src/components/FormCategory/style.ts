import styled from '@emotion/styled';

export const Category = styled.div`
  width: 36.125rem;
  height: 4.25rem;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding-left: 2.5rem;
  background: #050505;
  border-radius: 0.625rem;
`;

export const CategoryLabel = styled.h3`
  ${({ theme }) => theme.typo.body2};
  font-weight: 600;
  cursor: pointer;
`;
