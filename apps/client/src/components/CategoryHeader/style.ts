import Link from 'next/link';

import styled from '@emotion/styled';

export const CategoryHeaderWrapper = styled.div`
  width: 77.5rem;
  height: 2.5625rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media ${({ theme }) => theme.breakPoint['1440']} {
    width: calc(100vw - 12.5rem);
  }

  @media ${({ theme }) => theme.breakPoint['1024']} {
    width: calc(100vw - 7.5rem);
  }
`;

export const SeeMoreLink = styled(Link)`
  ${({ theme: { typo } }) => typo.h5}
  display: flex;
  align-items: center;
  font-weight: 400;
  cursor: pointer;
  color: ${({ theme: { color } }) => color.gray['070']};
`;
