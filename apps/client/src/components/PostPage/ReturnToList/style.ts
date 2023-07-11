import Link from 'next/link';

import styled from '@emotion/styled';

export const ReturnToListWrapper = styled(Link)`
  width: 10.1875rem;
  height: 2.875rem;
  display: flex;
  align-items: center;
  padding: 1rem 0.5rem;
  gap: 0.25rem;
  border-radius: 0.75rem;
  background: ${({ theme }) => theme.color.white};
  border: 0.0938rem solid ${({ theme }) => theme.color.primary.navy};
  transition: ease-in-out 0.2s;

  &:hover {
    background: ${({ theme }) => theme.color.primary.navy};
    p {
      color: ${({ theme }) => theme.color.white};
    }
    path {
      stroke: ${({ theme }) => theme.color.white};
    }
  }
`;

export const ReturnText = styled.p`
  font-weight: 600;
  ${({ theme }) => theme.typo.body1}
  color: ${({ theme }) => theme.color.primary.navy};
`;
