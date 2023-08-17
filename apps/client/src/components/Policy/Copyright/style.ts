import Image from 'next/image';

import styled from '@emotion/styled';

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ContentWrapper = styled(Column)`
  width: 77.5rem;
  gap: 5rem;
  padding: 5rem 0 7.5rem;
  margin: 0 auto;

  @media ${({ theme }) => theme.breakPoint['1440']} {
    width: calc(100vw - 12.5rem);
  }

  @media ${({ theme }) => theme.breakPoint['1024']} {
    width: calc(100vw - 7.5rem);
  }
`;

export const Section = styled(Column)`
  gap: 3rem;
`;

export const Title = styled.h2`
  ${({ theme }) => theme.typo.h2};
  color: ${({ theme }) => theme.color.gray['090']};
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

export const SubContentWrapper = styled(Column)`
  gap: 0.5rem;
`;

export const RegularSubTitle = styled.p`
  ${({ theme }) => theme.typo.h3};
  color: ${({ theme }) => theme.color.gray['090']};
  font-weight: 400;
`;

export const BoldSubTitle = styled(RegularSubTitle)`
  font-weight: 600;
`;

export const Description = styled.p`
  ${({ theme }) => theme.typo.h4};
  color: ${({ theme }) => theme.color.gray['070']};
  font-weight: 400;
`;

export const DownloadWrapper = styled.div`
  display: flex;
  gap: 0.75rem;
  align-items: center;
`;

export const DownloadButton = styled.button`
  ${({ theme }) => theme.typo.body2};
  color: ${({ theme }) => theme.color.gray['060']};
  font-weight: 600;

  width: 6rem;
  height: 1.75rem;
  border-radius: 0.25rem;
  background: ${({ theme }) => theme.color.gray['040']};
  cursor: pointer;
`;

export const ImageWrapper = styled.div`
  max-width: 65.1875rem;
  width: 100%;
`;

export const PolicyImage = styled(Image)`
  position: relative !important;
`;
