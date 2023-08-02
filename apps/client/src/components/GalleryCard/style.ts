import Link from 'next/link';

import styled from '@emotion/styled';

export const GalleryCard = styled(Link)`
  width: 18.25rem;
  height: 18.9375rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  cursor: pointer;
  position: relative;

  :hover {
    img {
      filter: brightness(60%);
    }
  }

  @media ${({ theme }) => theme.breakPoint['1440']} {
    width: 100%;
  }
`;

export const IMGWrapper = styled.div`
  width: 18.25rem;
  height: 11.25rem;
  border-radius: 1.25rem;
  overflow: hidden;
  position: relative;

  img {
    object-fit: cover;
    transition: filter ease-in-out 0.3s;
  }

  @media ${({ theme }) => theme.breakPoint['1440']} {
    width: 100%;
  }
`;

export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  .text {
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: break-all;
    display: -webkit-box;
    -webkit-box-orient: vertical;
  }
`;

export const Title = styled.h5`
  ${({ theme }) => theme.typo.h5}
  color: ${({ theme }) => theme.color.gray['090']};
  font-weight: 600;
  -webkit-line-clamp: 1;

  @media ${({ theme }) => theme.breakPoint['600']} {
    ${({ theme }) => theme.typo.h4}
  }
`;

export const ContentPreview = styled.p`
  ${({ theme }) => theme.typo.body2}
  color: ${({ theme }) => theme.color.gray['080']};
  font-weight: 400;
  -webkit-line-clamp: 2;

  @media ${({ theme }) => theme.breakPoint['600']} {
    ${({ theme }) => theme.typo.h5}
  }
`;
