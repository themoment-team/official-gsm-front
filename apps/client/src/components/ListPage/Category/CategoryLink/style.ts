import Link from 'next/link';

import styled from '@emotion/styled';

export const CategoryLink = styled(Link)`
  ${({ theme }) => theme.typo.h5}
  padding: 0.5rem 0.75rem;
  font-weight: 600;
  background-color: ${({ theme }) => theme.color.gray['030']};
  color: ${({ theme }) => theme.color.gray['060']};
  border-radius: 6.25rem;
`;

export const SelectedLink = styled(CategoryLink)`
  background-color: ${({ theme }) => theme.color.primary.navy};
  color: ${({ theme }) => theme.color.white};
`;
