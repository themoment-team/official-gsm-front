import Link from 'next/link';

import styled from '@emotion/styled';

export const CategoryHeaderWrapper = styled.div`
  width: 77.5rem;
  height: 2.5625rem;
  display: flex;
  justify-content: space-between;
  align-items: end;
`;

export const SeeMoreLink = styled(Link)`
  ${({ theme: { typo } }) => typo.h5}
  display: flex;
  align-items: center;
  font-weight: 400;
  color: ${({ theme: { color } }) => color.gray['070']};
  cursor: pointer;
`;
