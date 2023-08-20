import Image from 'next/image';

import styled from '@emotion/styled';

export const ContentWrapper = styled.div`
  width: 50rem;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  @media ${({ theme }) => theme.breakPoint[1024]} {
    width: calc(100vw - 7.5rem);
  }
`;

export const ContentImage = styled(Image)`
  position: relative !important;
`;

export const ImageWrapper = styled.div`
  width: 50rem;
  overflow: hidden;
  position: relative;
  img {
    object-fit: cover;
  }

  @media ${({ theme }) => theme.breakPoint[1024]} {
    width: calc(100vw - 7.5rem);
  }
`;

export const ContentText = styled.p`
  ${({ theme }) => theme.typo.body1}
  color: ${({ theme }) => theme.color.gray['090']};
  font-weight: 400;
  width: 50rem;
  word-break: break-all;
  white-space: pre-wrap;

  @media ${({ theme }) => theme.breakPoint[1024]} {
    width: calc(100vw - 7.5rem);
  }
`;
