import Link from 'next/link';

import styled from '@emotion/styled';

export const PostCard = styled(Link)`
  ${({ theme }) => theme.typo.h5}
  width: 100%;
  padding: 1rem 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 0.0625rem solid ${({ theme }) => theme.color.gray['040']};
  background-color: ${({ theme }) => theme.color.white};
  transition: background-color 0.3s;
  :hover {
    background-color: ${({ theme }) => theme.color.gray['020']};
  }
`;

export const IndexAndTitle = styled.div`
  width: 46.875rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media ${({ theme }) => theme.breakPoint['1440']} {
    width: 34.5625rem;
  }

  @media ${({ theme }) => theme.breakPoint['1024']} {
    width: 18.3125rem;
  }
`;

export const PostIndex = styled.p`
  color: ${({ theme }) => theme.color.gray['070']};
`;

export const PostTitle = styled.p`
  width: 43rem;
  text-align: left;
  color: ${({ theme }) => theme.color.gray['090']};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  @media ${({ theme }) => theme.breakPoint['1440']} {
    width: 29.8125rem;
  }

  @media ${({ theme }) => theme.breakPoint['1024']} {
    width: 14.375rem;
  }
`;
