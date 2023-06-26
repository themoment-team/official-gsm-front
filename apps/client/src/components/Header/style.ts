import styled from '@emotion/styled';
import Link from 'next/link';

export const Header = styled.header`
  width: 100%;
  height: 4rem;
  display: flex;
  justify-content: center;
  position: sticky;
  top: 0;
  z-index: 5;
`;

export const HeaderInner = styled.div`
  width: 77.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LogoLink = styled(Link)`
  display: block;
`;

export const GlobalNav = styled.nav`
  display: flex;
  gap: 3rem;
  transition: color 0.5s;
  a {
    ${({ theme }) => theme.typo.body1};
  }
`;
