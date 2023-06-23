import styled from '@emotion/styled';

export const Footer = styled.footer`
  background-color: ${({ theme }) => theme.color.sub.navy};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3.75rem 0;
`;

export const FooterContent = styled.div`
  width: 77.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const FooterTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 4.0625rem;
  color: ${({ theme }) => theme.color.white};
  a {
    ${({ theme }) => theme.typo.h5}
    font-weight: 700;
  }
`;

export const SiteInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 0.5rem;
`;

export const Copyright = styled.p`
  ${({ theme }) => theme.typo.h5}
  font-weight: 400;
`;

export const LinkWrapper = styled.div`
  display: flex;
  gap: 1.5rem;
`;

export const SchoolInfo = styled.p`
  ${({ theme }) => theme.typo.body2}
  font-weight: 400;
  text-align: end;
  color: rgba(255, 255, 255, 0.6);
`;
