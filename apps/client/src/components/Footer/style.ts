import styled from '@emotion/styled';

export const Footer = styled.footer`
  background-color: ${({ theme }) => theme.color.sub.navy};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FooterContent = styled.div`
  width: 77.5rem;
  display: flex;
  justify-content: space-between;
`;

export const FooterTextWrapper = styled.div``;

export const SchoolInfo = styled.p`
  ${({ theme }) => theme.typo.body2}
  font-weight: 400;
  text-align: end;
  color: rgba(255, 255, 255, 0.6);
`;
