import Link from 'next/link';

import styled from '@emotion/styled';

export const PopUpCard = styled(Link)`
  width: 269px;
  height: 191px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  cursor: pointer;
  position: relative;

  :hover {
    img {
      filter: brightness(60%);
    }
  }
`;

export const IMGWrapper = styled.div`
  width: 269px;
  height: 125px;
  border-radius: 8px;
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
  width: 28px;
  height: 28px;
  justify-content: center;
  align-items: center;
  border-radius: 8px 0px 4px 0px;
  background: rgba(255, 255, 255, 0.8);
  z-index: 1;

  color: ${({ theme }) => theme.color.primary.navy};
  font-feature-settings: 'clig' off, 'liga' off;

  ${({ theme }) => theme.typo.body2};
  font-weight: 400;
`;
