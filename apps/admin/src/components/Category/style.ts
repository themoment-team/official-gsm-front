import Link from 'next/link';

import styled from '@emotion/styled';

export const Category = styled.div`
  height: 4.25rem;
  width: 67.5rem;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding-left: 2.5rem;
  border-radius: 1.25rem;
  background: #050505;
`;

export const CustomLink = styled(Link)`
  font-weight: 600;
  font-size: 0.875rem;
`;
