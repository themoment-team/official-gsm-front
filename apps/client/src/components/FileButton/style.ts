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

  &:hover {
    p {
      text-decoration: underline;
    }
  }
`;

export const FileNameText = styled.p`
  font-weight: 400;
  ${({ theme }) => theme.typo.body2}
  color: ${({ theme }) => theme.color.gray['080']};
`;
