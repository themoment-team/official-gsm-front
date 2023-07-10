import styled from '@emotion/styled';

export const HamburgerMenuContainer = styled.menu`
  width: 28.75rem;
  height: 100vh;
  position: absolute;
  right: 0;
  background: ${({ theme }) => theme.color.white};
  padding-top: 5rem;
  padding-left: 3.13rem;
`;

export const HamburgerNav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  color: ${({ theme }) => theme.color.gray['050']};

  a {
    ${({ theme }) => theme.typo.h2};
    font-weight: 700;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 2.5rem;
  right: 2.5rem;

  & > svg {
    display: block;
  }
`;
