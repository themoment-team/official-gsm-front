import Link from 'next/link';

import styled from '@emotion/styled';

export const PopUpCard = styled(Link)`
  width: 16.8125rem;
  height: 11.9375rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  cursor: pointer;
  position: relative;

  :hover {
    img {
      filter: brightness(60%);
    }
  }
`;

export const IMGWrapper = styled.div`
  height: 7.8125rem;
  border-radius: 0.5rem;
  overflow: hidden;
  position: relative;
  background: ${({ theme }) => theme.color.gray['040']};

  img {
    object-fit: cover;
    transition: filter ease-in-out 0.3s;
  }

  @media ${({ theme }) => theme.breakPoint['1440']} {
    width: 100%;
  }
`;

export const Title = styled.p`
  ${({ theme }) => theme.typo.h5};
  color: ${({ theme }) => theme.color.gray['070']};
  font-weight: 600;
  -webkit-line-clamp: 2;

  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-all;
  display: -webkit-box;
  -webkit-box-orient: vertical;

  @media ${({ theme }) => theme.breakPoint['600']} {
    ${({ theme }) => theme.typo.h4};
  }
`;

export const IndexBox = styled.div`
  position: absolute;
  display: flex;
  width: 1.75rem;
  height: 1.75rem;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem 0rem 0.25rem 0rem;
  background: rgba(255, 255, 255, 0.8);
  z-index: 1;

  ${({ theme }) => theme.typo.body2};
  color: ${({ theme }) => theme.color.primary.navy};
  font-weight: 400;
`;
