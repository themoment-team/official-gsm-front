import Link from 'next/link';

import styled from '@emotion/styled';

export const FileButton = styled(Link)`
  height: 2rem;
  display: inline-flex;
  align-items: center;
  padding: 0 0.9375rem;
  gap: 0.25rem;
  border-radius: 6.25rem;
  background-color: ${({ theme }) => theme.color.gray['030']};
`;

export const FileNameText = styled.p`
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1.25rem;
  color: ${({ theme }) => theme.color.gray['080']};
`;
