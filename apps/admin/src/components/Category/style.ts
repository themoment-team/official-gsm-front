import Link from 'next/link';

import styled from '@emotion/styled';

export const Category = styled.div`
  width: 67.5rem;
  height: 4.25rem;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding-left: 2.5rem;
  background: #050505;
`;

export const CustomLink = styled(Link)`
  font-weight: 600;
  font-size: 0.875rem;
`;
