import Link from 'next/link';

import styled from '@emotion/styled';

export const Banner = styled(Link)`
  width: 77.5rem;
  height: 14.9375rem;
  border-radius: 1.25rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  background: ${({ theme: { color } }) => color.primary.navy};
  color: ${({ theme: { color } }) => color.white};

  @media ${({ theme }) => theme.breakPoint['1440']} {
    width: calc(100vw - 12.5rem);
  }

  @media ${({ theme }) => theme.breakPoint['1024']} {
    width: calc(100vw - 7.5rem);
  }
`;

export const DonutImageWrapper = styled.div`
  position: absolute;
  width: 12.9012rem;
  height: 14.9375rem;
  right: 1.7862rem;
  top: 0rem;
`;

export const TextBox = styled.div`
  width: 34.375rem;
  height: 7.5625rem;
  margin-right: 39rem;

  h4,
  p {
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
  }

  @media ${({ theme }) => theme.breakPoint['1440']} {
    margin: 0 calc(100vw - 48.9012rem) 0 2rem;
    z-index: 1;
  }

  @media ${({ theme }) => theme.breakPoint['1024']} {
    width: 27.3125rem;
    margin: 0 calc(100vw - 36.9012rem) 0 2rem;
  }
`;

export const Text = styled.h5`
  font-weight: 600;
  ${({ theme: { typo } }) => typo.h5};
`;

export const Title = styled.p`
  margin-top: 1rem;
  font-weight: 700;
  ${({ theme: { typo } }) => typo.title};
`;

export const Preview = styled.h4`
  margin-top: 0.5rem;
  font-weight: 400;
  ${({ theme: { typo } }) => typo.h4};
`;
