import Link from 'next/link';

import styled from '@emotion/styled';

export const Header = styled.header`
  width: 100%;
  height: 4rem;
  display: flex;
  justify-content: center;
  position: sticky;
  top: 0;
  z-index: 5;
  transition: background 0.3s;
`;

export const HeaderInner = styled.div`
  width: 77.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media ${({ theme }) => theme.breakPoint['1440']} {
    width: calc(100vw - 12.5rem);
  }

  @media ${({ theme }) => theme.breakPoint['1024']} {
    width: calc(100vw - 7.5rem);
  }
`;

export const LogoLink = styled(Link)`
  display: block;
`;

export const GlobalNav = styled.nav`
  display: flex;
  gap: 3rem;
  transition: color 0.3s;
  a {
    ${({ theme }) => theme.typo.body1};
  }
`;

export const HamburgerButton = styled.button`
  svg {
    display: block;
  }
`;
