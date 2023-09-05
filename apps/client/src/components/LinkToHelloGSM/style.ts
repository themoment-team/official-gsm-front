import styled from '@emotion/styled';

export const LinkToHelloGSMWrapper = styled.a`
  width: 77.375rem;
  height: 8.0625rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 1.25rem;
  margin: 7.75rem 0;
  z-index: 1;
  position: relative;
  background: linear-gradient(90deg, #35d391 0%, #6cabe4 48.96%, #c0fbff 100%);
  background-size: 200% 200%;
  &:hover {
    animation: gradient 5s ease infinite;
  }
  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  @media ${({ theme }) => theme.breakPoint['1440']} {
    width: calc(100vw - 12.5rem);
  }

  @media ${({ theme }) => theme.breakPoint['1024']} {
    width: calc(100vw - 7.5rem);
  }
`;

export const TextWrapper = styled.div`
  height: 4.5625rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const AdmissionText = styled.h3`
  ${({ theme: { typo } }) => typo.h3}
  color: ${({ theme: { color } }) => color.white};
  font-weight: 700;

  @media ${({ theme }) => theme.breakPoint['600']} {
    ${({ theme: { typo } }) => typo.h4}
  }

  @media (max-width: 400px) {
    ${({ theme: { typo } }) => typo.body1}
  }
`;

export const HashTagWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;

export const HashTag = styled.p`
  ${({ theme: { typo } }) => typo.h4}
  color: ${({ theme: { color } }) => color.white};
  font-weight: 400;

  @media ${({ theme }) => theme.breakPoint['600']} {
    ${({ theme: { typo } }) => typo.h5}
  }

  @media (max-width: 400px) {
    ${({ theme: { typo } }) => typo.body2}
  }
`;
