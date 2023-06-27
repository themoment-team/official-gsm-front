import styled from '@emotion/styled';
import Link from 'next/link';

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
`;

export const ChevronWrapper = styled.div`
  width: 1.25rem;
  height: 1.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ReturnText = styled.p`
  font-weight: 600;
  ${({ theme }) => theme.typo.body1}
  color: ${({ theme }) => theme.color.primary.navy};
`;
