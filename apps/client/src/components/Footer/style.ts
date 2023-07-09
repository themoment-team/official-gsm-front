import styled from '@emotion/styled';

export const Footer = styled.footer`
  background-color: ${({ theme }) => theme.color.sub.navy};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3.75rem 0;
  position: relative;
`;

export const FooterContent = styled.div`
  width: 77.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media ${({ theme }) => theme.breakPoint['1440']} {
    width: calc(100vw - 12.5rem);
    align-items: end;
    svg {
      width: 9rem;
      height: 8.8125rem;
    }
  }

  @media ${({ theme }) => theme.breakPoint['1024']} {
    width: calc(100vw - 7.5rem);
    flex-direction: column;
    align-items: start;
    gap: 2.5rem;
  }
`;

export const FooterTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 4.06rem;

  @media ${({ theme }) => theme.breakPoint['1024']} {
    align-items: start;
  }
`;

export const SiteInfo = styled.div`
  display: flex;
  color: ${({ theme }) => theme.color.white};
  flex-direction: column;
  align-items: end;
  gap: 0.5rem;

  @media ${({ theme }) => theme.breakPoint['1024']} {
    flex-direction: column;
    align-items: start;
  }
`;

export const Copyright = styled.p`
  ${({ theme }) => theme.typo.h5}
  font-weight: 400;
`;

export const LinkWrapper = styled.div`
  display: flex;
  gap: 1.5rem;
  a {
    ${({ theme }) => theme.typo.h5}
    font-weight: 700;
  }

  @media ${({ theme }) => theme.breakPoint['1024']} {
    flex-direction: column;
    gap: 0.5rem;
    align-items: start;
  }
`;

export const SchoolInfo = styled.p`
  ${({ theme }) => theme.typo.body2}
  font-weight: 400;
  text-align: end;
  color: rgba(255, 255, 255, 0.6);

  @media ${({ theme }) => theme.breakPoint['1024']} {
    text-align: start;
  }
`;
