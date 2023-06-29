import Link from 'next/link';

import styled from '@emotion/styled';

export const FileButton = styled(Link)`
  display: flex;
  width: fit-content;
  height: 2rem;
  align-items: center;
  padding: 0 0.9375rem;
  gap: 0.25rem;
  border-radius: 6.25rem;
  background-color: #f5f5f5;

  &:hover {
    p {
      text-decoration: underline;
    }
  }
`;

export const FileNameText = styled.p`
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1.25rem;
  color: #424242;
`;
