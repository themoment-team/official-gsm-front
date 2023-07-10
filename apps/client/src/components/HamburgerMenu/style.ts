import styled from '@emotion/styled';

export const HamburgerMenuContainer = styled.menu<{
  isHamburgerMenuShow: boolean;
}>`
  width: 28.75rem;
  height: 100vh;
  position: absolute;
  right: 0;
  background: ${({ theme }) => theme.color.white};
  padding-top: 5rem;
  padding-left: 3.13rem;
  transform: translateX(100%);
  transition: transform 0.5s ease-in-out;
  transform: ${({ isHamburgerMenuShow }) =>
    isHamburgerMenuShow && 'translateX(0)'};
`;

export const HamburgerNav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 1.5rem;
  color: ${({ theme }) => theme.color.gray['050']};

  a {
    ${({ theme }) => theme.typo.h2};
    flex-grow: 0;
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
